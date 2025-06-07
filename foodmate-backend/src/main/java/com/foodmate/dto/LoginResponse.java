package com.foodmate.dto;

public class LoginResponse {

    private String token;
    private String email;

    public LoginResponse(String token, String email) {
        this.token = token;
        this.email = email;
    }

    // Getters and setters
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
} 