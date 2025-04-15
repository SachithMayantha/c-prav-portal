package com.c_prav.portal.controller;

import com.c_prav.portal.dto.UserDto;
import com.c_prav.portal.service.OktaService;
import com.c_prav.portal.service.impl.UserServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
@AllArgsConstructor
public class UserController {

    private UserServiceImpl userService;

    private OktaService oktaService;

    @PostMapping("save")
    public ResponseEntity<String> saveUser(@RequestBody UserDto userDto) {
        try {
            String msg = userService.saveUser(userDto);
            oktaService.createOktaUser(userDto.getFirstName(), userDto.getLastName(), userDto.getEmail(), userDto.getPassword(), userDto.getRoles());
            return new ResponseEntity<>(msg, HttpStatus.CREATED);
        }catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable("userId") Integer userId) {
        String msg = userService.deleteUser(userId);
        return new ResponseEntity<>(msg, HttpStatus.OK);
    }

    @GetMapping("{userId}")
    public ResponseEntity<UserDto> getUserById(@PathVariable("userId") Integer userId) {
        return new ResponseEntity<>(userService.getUserById(userId), HttpStatus.OK);
    }

    @GetMapping("getUsers")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @PutMapping("update")
    public ResponseEntity<UserDto> updateUser(@RequestBody UserDto userDto) {
        return new ResponseEntity<>(userService.updateUser(userDto), HttpStatus.OK);
    }
}
