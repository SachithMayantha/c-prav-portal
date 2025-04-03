package com.c_prav.portal.mapper;

import com.c_prav.portal.dto.UserDto;
import com.c_prav.portal.entity.UserEntity;

public class UserMapper {

    public static UserDto mapUserToUserDto(UserEntity userEntity) {
        return new UserDto(
                userEntity.getN_user_id(),
                userEntity.getC_user_name(),
                userEntity.getC_user_email(),
                userEntity.getC_user_password(),
                userEntity.getRoles()
        );
    }
    public static UserEntity mapUserDtoToUserEntity(UserDto userDto) {
        return new UserEntity(
                userDto.getUserId(),
                userDto.getName(),
                userDto.getEmail(),
                userDto.getPassword(),
                userDto.getRoles()
        );
    }
}
