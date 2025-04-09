package com.c_prav.portal.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("home")
@CrossOrigin(origins = "http://localhost:3000")
public class MainController {

    @GetMapping("admin")
    public String adminAccess(){
        return "Welcome to Admin Page";
    }

    @GetMapping("staff")
    public String staffAccess(){
        return "Welcome to Staff Page";
    }

    @GetMapping("client")
    public String clientAccess(){
        return "Welcome to Client Page";
    }
}
