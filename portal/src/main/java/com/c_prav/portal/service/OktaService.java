package com.c_prav.portal.service;

import com.okta.sdk.client.Client;
import com.okta.sdk.resource.user.User;
import com.okta.sdk.resource.user.UserProfile;
import com.okta.sdk.resource.user.UserCredentials;
import com.okta.sdk.resource.user.PasswordCredential;
import com.okta.sdk.resource.user.CreateUserRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class OktaService {

    private final Client oktaClient;

    @Value("${okta.api.token}")
    private String oktaApiToken;

    @Value("${okta.api.url}")
    private String oktaApiUrl;

    /**
     * Create user in Okta and assign to role-based group
     */
    public void createOktaUser(String firstName, String lastName, String email, String password, String role) {
        try {
            // Prepare user profile
            UserProfile userProfile = oktaClient.instantiate(UserProfile.class)
                    .setEmail(email)
                    .setLogin(email)
                    .setFirstName(firstName)
                    .setLastName(lastName);

            // Prepare password credentials
            char[] passwordChars = password.toCharArray();
            PasswordCredential passwordCredential = oktaClient.instantiate(PasswordCredential.class)
                    .setValue(passwordChars);

            UserCredentials userCredentials = oktaClient.instantiate(UserCredentials.class)
                    .setPassword(passwordCredential);

            // Create user request
            CreateUserRequest createUserRequest = oktaClient.instantiate(CreateUserRequest.class)
                    .setProfile(userProfile)
                    .setCredentials(userCredentials);

            // Create user in Okta
            User createdUser = oktaClient.createUser(createUserRequest);
            System.out.println("User created: " + createdUser.getProfile().getEmail());

            // Assign user to group
            assignUserToGroup(createdUser.getId(), role);

        } catch (Exception e) {
            System.err.println("Error creating user: " + e.getMessage());
            e.printStackTrace();
            throw new RuntimeException("Error creating user in Okta", e);
        }
    }

    /**
     * Assign user to the correct Okta group based on role
     */
    private void assignUserToGroup(String userId, String role) {
        String groupId = getGroupIdFromRole(role);

        String url = oktaApiUrl + "/api/v1/groups/" + groupId + "/users/" + userId;

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        // Set the header with "SSWS" prefix for Okta tokens
        headers.set("Authorization", "SSWS " + oktaApiToken);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        RestTemplate restTemplate = new RestTemplate();
        System.out.println("URL: " + url);
        System.out.println("Headers: " + headers);
        System.out.println("Entity: " + entity.getBody());
        restTemplate.put(url, entity);

        System.out.println("User assigned to group: " + role);
    }

    /**
     * Map role name to Okta Group ID
     */
    private String getGroupIdFromRole(String role) {
        return switch (role.toLowerCase()) {
            case "admin" -> "00go1xdx51Fnjdhkg5d7";
            case "staff" -> "00go1xeooaYKsioky5d7";
            case "client" -> "00go1xch9n2QVIosf5d7";
            default -> throw new IllegalArgumentException("Unknown role: " + role);
        };
    }
}