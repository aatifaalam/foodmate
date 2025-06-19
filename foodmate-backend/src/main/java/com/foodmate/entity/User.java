package com.foodmate.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

// This annotation marks the class as a JPA entity, meaning it will be mapped to a database table.
@Entity
public class User {

    // Marks this field as the primary key of the entity (table).
    @Id
    // Specifies that the primary key will be generated automatically (auto-increment in DB).
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // This field will be mapped to a column in the User table.
    private String email;

    // This field will be mapped to a column in the User table.
    private String password;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
} 