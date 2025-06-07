package com.foodmate.controller;

import com.foodmate.dto.LoginRequest;
import com.foodmate.dto.LoginResponse;
import com.foodmate.entity.User;
import com.foodmate.service.UserService;
import com.foodmate.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @PostMapping("/api/auth/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest req) {
        Optional<User> userOptional = userService.findByEmail(req.getEmail());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (passwordEncoder.matches(req.getPassword(), user.getPassword())) {
                String token = jwtUtil.generateToken(user.getEmail());
                return ResponseEntity.ok(new LoginResponse(token, user.getEmail()));
            }
        }
        return ResponseEntity.status(401)
                .body(new LoginResponse("Invalid email or password", null));
    }
} 