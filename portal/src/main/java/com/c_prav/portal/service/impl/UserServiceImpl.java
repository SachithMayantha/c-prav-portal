package com.c_prav.portal.service.impl;

import com.c_prav.portal.dto.UserDto;
import com.c_prav.portal.entity.UserEntity;
import com.c_prav.portal.mapper.UserMapper;
import com.c_prav.portal.repository.UserRepository;
import com.c_prav.portal.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;


    @Override
    public String saveUser(UserDto userDto) {
        try{
            userRepository.save(UserMapper.mapUserDtoToUserEntity(userDto));
            return "User Saved";
        }catch (Exception e){
            return e.getMessage();
        }
    }

    @Override
    public UserDto getUserById(Integer id) {
        UserEntity userEntity = userRepository.findById(id).get();
        return UserMapper.mapUserToUserDto(userEntity);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<UserEntity> userEntities = userRepository.findAll();
        return userEntities.stream().map(UserMapper::mapUserToUserDto).collect(Collectors.toList());
    }

    @Override
    public String deleteUser(Integer id) {
        try{
            userRepository.deleteById(id);
            return "User Deleted";
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    @Override
    public UserDto updateUser(UserDto userDto) {
        UserEntity mappedUserEntity = userRepository.save(UserMapper.mapUserDtoToUserEntity(userDto));
        return UserMapper.mapUserToUserDto(mappedUserEntity);
    }
}
