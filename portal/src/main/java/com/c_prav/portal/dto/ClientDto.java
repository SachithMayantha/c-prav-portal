package com.c_prav.portal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClientDto {
    private int clientId;
    private String company;
    private String contactPerson;
    private String mobile;
    private String email;
    private String address;
}
