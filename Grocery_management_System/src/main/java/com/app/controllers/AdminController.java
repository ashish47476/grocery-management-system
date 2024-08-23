package com.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AdminUpdateVendorDto;
import com.app.dto.UserDTO;
import com.app.dto.UserResponseDTO;
import com.app.entities.User;
import com.app.entities.UserRole;
import com.app.repository.UserRepository;
import com.app.service.ProductServiceImpl;
import com.app.service.UserService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
	
	
	@Autowired
    private ProductServiceImpl productsService;
	
	 @Autowired
	 private UserService userService;
	 
	 @Autowired
	 private UserRepository userRepository;
	 

	    @GetMapping("/getAllUsers")
	    public ResponseEntity<?> getAllUsers() {
	        return ResponseEntity.ok(userService.findAllUsers());
	    }
	    
	    // get vendor list
	    @GetMapping("/getVendors")
	    public ResponseEntity<?> getAllVendors(){
	    	List<UserResponseDTO> user = userService.findAllVendor(UserRole.ROLE_VENDOR);
			return ResponseEntity.ok(user);
	    }
	    
	    //get customer list
	    @GetMapping("/getCustomer")
	    public ResponseEntity<?> getAllCustomers(){
	    	List<UserResponseDTO> user = userService.findAllCustomer(UserRole.ROLE_CUSTOMER);
			return ResponseEntity.ok(user);
	    }
	    
	    //get vendor by id
	    @GetMapping("/{id}")
	    public ResponseEntity<?> getVendorById(@PathVariable Long id) {
	        Optional<User> user = userService.findUserById(id);
	        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	    }
	    
	    //method to add vendor
	    @PostMapping("/addVendor")
	    public ResponseEntity<?> registerVendor(@RequestBody UserDTO user) {
	    	user.setRole("ROLE_VENDOR");
	        return  ResponseEntity.ok(userService.saveUser(user));
	    }
	    
	    //
//	    @PutMapping("/{id}")
//	    public ResponseEntity<User> updateVendor(@PathVariable Long id, @RequestBody AdminUpdateVendorDto vendorDetails) {
//	        Optional<User> user = userService.findUserById(id);
//	        if (user.isPresent()) {
//	        	vendorDetails.setRole("ROLE_VENDOR");
//	            return ResponseEntity.ok(userService.saveUser(vendorDetails));
//	        }
//	        return ResponseEntity.notFound().build();
//	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteVendor(@PathVariable Long id) {
	        if (userService.findUserById(id).isPresent()) {
	            userService.deleteUser(id);
	            return ResponseEntity.ok().build();
	        }
	        return ResponseEntity.notFound().build();
	    }
}
