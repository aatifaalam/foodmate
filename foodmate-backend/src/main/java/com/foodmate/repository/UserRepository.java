package com.foodmate.repository;

import com.foodmate.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

// This interface extends JpaRepository, which provides CRUD operations for the User entity.
// JpaRepository uses JPA/Hibernate under the hood to interact with the database.
public interface UserRepository extends JpaRepository<User, Long> {
    // Custom query method to find a user by email. Spring Data JPA will generate the query automatically.
    Optional<User> findByEmail(String email);
} 