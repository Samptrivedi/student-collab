package com.studentcollab.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.studentcollab.backend.model.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
}