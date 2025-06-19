package com.foodmate.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

// This is a Data Transfer Object (DTO) and is not a JPA entity. It is used to transfer data between layers.
// No JPA/Hibernate annotations are present here.

public class LoginRequest {

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;

    // Getters and setters
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