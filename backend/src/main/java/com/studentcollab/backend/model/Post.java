package com.studentcollab.backend.model;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;
}