package com.foodmate.controller;

import com.foodmate.dto.FoodPostDTO;
import com.foodmate.model.FoodPost;
import com.foodmate.service.FoodPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/food")
@CrossOrigin(origins = "http://localhost:3000")
public class FoodPostController {

    @Autowired
    private FoodPostService foodPostService;

    @PostMapping
    public ResponseEntity<FoodPost> createFoodPost(@RequestBody FoodPostDTO foodPostDTO) {
        FoodPost foodPost = foodPostService.saveFoodPost(foodPostDTO);
        return ResponseEntity.ok(foodPost);
    }

    @GetMapping
    public ResponseEntity<List<FoodPost>> getAllFoodPosts() {
        List<FoodPost> foodPosts = foodPostService.getAllFoodPosts();
        return ResponseEntity.ok(foodPosts);
    }
} 