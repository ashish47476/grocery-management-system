package com.app.controllers;

import com.app.dto.LoginDTO;
import com.app.dto.UserDTO;
import com.app.entities.User;
import com.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/getAllUsers")
    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.ok(userService.findAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        Optional<User> user = userService.findUserById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<?> registerUser(@RequestBody UserDTO user) {
    	user.setRole("ROLE_CUSTOMER");
        return  ResponseEntity.ok(userService.saveUser(user));
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody UserDTO userDetails) {
        Optional<User> user = userService.findUserById(id);
        if (user.isPresent()) {
            userDetails.setId(id);
            return ResponseEntity.ok(userService.saveUser(userDetails));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        if (userService.findUserById(id).isPresent()) {
            userService.deleteUser(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
    
//    @PostMapping
//    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDto) {
//        UserDTO savedUser = userService.saveUser(userDto);
//        return ResponseEntity.ok(savedUser);
//    }

//    @GetMapping("/{id}")
//    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
//        UserDTO userDto = userService.getUserById(id);
//        return ResponseEntity.ok(userDto);
//    }
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO loginRequest) {
        Optional<User> optionalUser = userService.authenticateUser(loginRequest.getEmail(), loginRequest.getPassword());
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            return ResponseEntity.ok(user); // Return the user or a token if you have one
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
}
}
