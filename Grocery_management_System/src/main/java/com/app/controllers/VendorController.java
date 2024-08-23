package com.app.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AdminUpdateVendorDto;
import com.app.dto.UserDTO;
import com.app.entities.User;
import com.app.service.UserService;

@RestController
@RequestMapping("/vendor")
@CrossOrigin(origins = "http://localhost:3000")
public class VendorController {
	
	@Autowired
	private UserService userService;
	//method to add vendor
    @PostMapping("/addVendor")
    public ResponseEntity<?> registerVendor(@RequestBody UserDTO user) {
    	user.setRole("ROLE_VENDOR");
        return  ResponseEntity.ok(userService.saveUser(user));
    }
    
 
    
    @PutMapping("/{id}")
    public ResponseEntity<?> updateVendor(@PathVariable Long id, @RequestBody AdminUpdateVendorDto userDetails) {
        Optional<User> user = userService.findUserById(id);
        if (user.isPresent()) {
            userDetails.setId(id);
            userDetails.setRole("ROLE_VENDOR");
            return ResponseEntity.ok(userService.saveUserVendor(userDetails));
        }
        return ResponseEntity.notFound().build();
    }

}
