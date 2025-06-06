package com.foodmate.repository;

import com.foodmate.model.FoodPost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodPostRepository extends JpaRepository<FoodPost, Long> {
} 