package com.c_prav.portal.config;

import com.okta.sdk.authc.credentials.TokenClientCredentials;
import com.okta.sdk.client.Client;
import com.okta.sdk.client.Clients;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OktaClientConfig {

    @Value("${okta.api.token}")
    private String oktaApiToken;

    @Value("${okta.api.url}")
    private String oktaApiUrl;

    @Bean
    public Client oktaClient() {
        return Clients.builder()
                .setOrgUrl(oktaApiUrl)
                .setClientCredentials(new TokenClientCredentials(oktaApiToken))
                .build();
    }
}

