package com.foodmate;

import com.foodmate.dto.FoodPostDTO;
import com.foodmate.service.FoodPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDateTime;

@SpringBootApplication
public class FoodmateApplication implements CommandLineRunner {

    @Autowired
    private FoodPostService foodPostService;

    public static void main(String[] args) {
        SpringApplication.run(FoodmateApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        FoodPostDTO testFoodPost = new FoodPostDTO(
                "Test Title",
                "Test Description",
                "Test Location",
                10,
                LocalDateTime.now().plusDays(1)
        );
        foodPostService.saveFoodPost(testFoodPost);
    }
} 