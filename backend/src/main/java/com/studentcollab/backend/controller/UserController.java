package com.studentcollab.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.studentcollab.backend.model.User;
import com.studentcollab.backend.repository.UserRepository;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserRepository repo;

    // ✅ Register User
    @PostMapping
    public User register(@RequestBody User user) {
        return repo.save(user);
    }

    // ✅ Get all users (optional)
    @GetMapping
    public Iterable<User> getUsers() {
        return repo.findAll();
    }
}