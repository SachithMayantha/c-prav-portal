package com.c_prav.portal.service;

import com.c_prav.portal.dto.LeadDto;
import com.c_prav.portal.dto.UserDto;

import java.util.List;

public interface UserService {
    String saveUser(UserDto userDto);

    UserDto getUserById(Integer id);

    List<UserDto> getAllUsers();

    String deleteUser(Integer id);

    UserDto updateUser(UserDto userDto);
}
