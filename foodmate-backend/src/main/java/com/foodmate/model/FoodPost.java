package com.foodmate.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDateTime;

// This annotation marks the class as a JPA entity, meaning it will be mapped to a database table.
@Entity
public class FoodPost {

    // Marks this field as the primary key of the entity (table).
    @Id
    // Specifies that the primary key will be generated automatically (auto-increment in DB).
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // These fields will be mapped to columns in the FoodPost table.
    private String title;
    private String description;
    private String location;
    private int quantity;
    private java.time.LocalDateTime expiryTime;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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
} 