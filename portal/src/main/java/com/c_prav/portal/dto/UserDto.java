package com.c_prav.portal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private int userId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String roles;

    public UserDto(String firstName, String lastName, String email, String password, String roles) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }
}