//package com.c_prav.portal.service;
//
//import com.okta.sdk.client.Client;
//import com.okta.sdk.resource.user.User;
//import com.okta.sdk.resource.user.UserBuilder;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//@Service
//@RequiredArgsConstructor
//public class OktaService {
//
//    private final Client oktaClient;
//
//    public void createOktaUser(String firstName, String lastName, String email, String password) {
//        User user = UserBuilder.instance()
//                .setEmail(email)
//                .setLogin(email)
//                .setFirstName(firstName)
//                .setLastName(lastName)
//                .setPassword(password.toCharArray())
//                .setActive(true) // User will be active immediately
//                .buildAndCreate(oktaClient);
//
//        System.out.println("✅ Created user in Okta: " + user.getId());
//    }
//}
