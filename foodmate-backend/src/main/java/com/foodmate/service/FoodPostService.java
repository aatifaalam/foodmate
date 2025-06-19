package com.foodmate.service;

import com.foodmate.dto.FoodPostDTO;
import com.foodmate.model.FoodPost;
import com.foodmate.repository.FoodPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FoodPostService {

    // FoodPostRepository is a Spring Data JPA repository that uses Hibernate under the hood.
    @Autowired
    private FoodPostRepository foodPostRepository;

    // This method saves a FoodPost entity to the database using JPA/Hibernate.
    public FoodPost saveFoodPost(FoodPostDTO foodPostDTO) {
        FoodPost foodPost = new FoodPost();
        foodPost.setTitle(foodPostDTO.getTitle());
        foodPost.setDescription(foodPostDTO.getDescription());
        foodPost.setLocation(foodPostDTO.getLocation());
        foodPost.setQuantity(foodPostDTO.getQuantity());
        foodPost.setExpiryTime(foodPostDTO.getExpiryTime());
        // The save method uses JPA/Hibernate to persist the entity.
        return foodPostRepository.save(foodPost);
    }

    // This method retrieves all FoodPost entities from the database using JPA/Hibernate.
    public List<FoodPost> getAllFoodPosts() {
        return foodPostRepository.findAll();
    }
} 