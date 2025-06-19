package com.foodmate.dto;

import java.time.LocalDateTime;

// This is a Data Transfer Object (DTO) and is not a JPA entity. It is used to transfer data between layers.
// No JPA/Hibernate annotations are present here.

public class FoodPostDTO {
    private String title;
    private String description;
    private String location;
    private int quantity;
    private LocalDateTime expiryTime;

    // Getters and Setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public LocalDateTime getExpiryTime() {
        return expiryTime;
    }

    public void setExpiryTime(LocalDateTime expiryTime) {
        this.expiryTime = expiryTime;
    }

    public FoodPostDTO(String title, String description, String location, int quantity, LocalDateTime expiryTime) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.quantity = quantity;
        this.expiryTime = expiryTime;
    }
} 