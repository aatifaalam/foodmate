package com.foodmate.service;

import com.foodmate.dto.FoodPostDTO;
import com.foodmate.model.FoodPost;
import com.foodmate.repository.FoodPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FoodPostService {

    @Autowired
    private FoodPostRepository foodPostRepository;

    public FoodPost saveFoodPost(FoodPostDTO foodPostDTO) {
        FoodPost foodPost = new FoodPost();
        foodPost.setTitle(foodPostDTO.getTitle());
        foodPost.setDescription(foodPostDTO.getDescription());
        foodPost.setLocation(foodPostDTO.getLocation());
        foodPost.setQuantity(foodPostDTO.getQuantity());
        foodPost.setExpiryTime(foodPostDTO.getExpiryTime());
        return foodPostRepository.save(foodPost);
    }

    public List<FoodPost> getAllFoodPosts() {
        return foodPostRepository.findAll();
    }
} 