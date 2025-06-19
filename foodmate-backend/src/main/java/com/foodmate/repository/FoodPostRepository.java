package com.foodmate.repository;

import com.foodmate.model.FoodPost;
import org.springframework.data.jpa.repository.JpaRepository;

// This interface extends JpaRepository, which provides CRUD operations for the FoodPost entity.
// JpaRepository uses JPA/Hibernate under the hood to interact with the database.
public interface FoodPostRepository extends JpaRepository<FoodPost, Long> {
    // Additional custom query methods can be defined here if needed.
} 