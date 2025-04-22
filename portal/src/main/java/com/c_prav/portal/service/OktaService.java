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
    public void createOktaUser(
            String firstName,
            String lastName,
            String email,
            String tempPassword,
            String role
    ) {
        // 1) Build profile & creds
        UserProfile profile = oktaClient.instantiate(UserProfile.class)
                .setFirstName(firstName)
                .setLastName(lastName)
                .setEmail(email)
                .setLogin(email);

        PasswordCredential pwd = oktaClient.instantiate(PasswordCredential.class)
                .setValue(tempPassword.toCharArray());

        CreateUserRequest req = oktaClient.instantiate(CreateUserRequest.class)
                .setProfile(profile)
                .setCredentials(oktaClient.instantiate(UserCredentials.class)
                        .setPassword(pwd));

        // 2) Create USER in STAGED state (activate=false) :contentReference[oaicite:0]{index=0}
        User user = oktaClient.createUser(req, false, null, null);

        // 3) Activate silently (sendEmail=false) :contentReference[oaicite:1]{index=1}
        user.activate(false);

        // 4) Send reset‑password email (sendEmail=true) :contentReference[oaicite:2]{index=2}
        user.resetPassword(true);

        // 5) (optional) Assign to group
        assignUserToGroup(user.getId(), role);
    }

    /**
     * Assign user to the correct Okta group based on role
     */
    private void assignUserToGroup(String userId, String role) {
//        System.out.println("Assigning user to group " + role);
        String groupId = getGroupIdFromRole(role);

        String url = oktaApiUrl + "/api/v1/groups/" + groupId + "/users/" + userId;

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        // Set the header with "SSWS" prefix for Okta tokens
        headers.set("Authorization", "SSWS " + oktaApiToken);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        RestTemplate restTemplate = new RestTemplate();
//        System.out.println("URL: " + url);
//        System.out.println("Headers: " + headers);
//        System.out.println("Entity: " + entity.getBody());
        restTemplate.put(url, entity);

//        System.out.println("User assigned to group: " + role);
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