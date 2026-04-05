package com.studentcollab.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.studentcollab.backend.model.Post;
import com.studentcollab.backend.repository.PostRepository;

import java.util.List;

@RestController
@RequestMapping("/posts")
@CrossOrigin("*")
public class PostController {

    @Autowired
    private PostRepository repo;

    // ✅ Create Post (no auth required for now)
    @PostMapping
    public Post createPost(@RequestBody Post post) {
        return repo.save(post);
    }

    // 🔐 Protected API (requires JWT token in header)
    @GetMapping
    public List<Post> getPosts(@RequestHeader(value = "Authorization", required = false) String token) {

        // Debug print
        System.out.println("Authorization Header: " + token);

        // Basic check
        if (token == null || !token.startsWith("Bearer ")) {
            throw new RuntimeException("Missing or invalid Authorization header");
        }

        // Extract actual token (optional use later)
        String jwtToken = token.substring(7);

        // You can later validate JWT here

        return repo.findAll();
    }
}