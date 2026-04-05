package com.studentcollab.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.studentcollab.backend.model.User;
import com.studentcollab.backend.repository.UserRepository;
import com.studentcollab.backend.security.JwtUtil;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserRepository repo;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public String login(@RequestBody User user) {

        System.out.println("Login API hit");

        Optional<User> foundUser = repo.findAll()
                .stream()
                .filter(u -> u.getUsername().equals(user.getUsername())
                        && u.getPassword().equals(user.getPassword()))
                .findFirst();

        if (foundUser.isPresent()) {
            return jwtUtil.generateToken(foundUser.get().getUsername());
        }

        return "Invalid Credentials";
    }
}