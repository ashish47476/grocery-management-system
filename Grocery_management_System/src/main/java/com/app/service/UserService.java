package com.app.service;

import com.app.custom_exceptions.ApiException;
import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.AdminUpdateVendorDto;
import com.app.dto.UserDTO;
import com.app.dto.UserResponseDTO;
import com.app.dto.UserVendorDTO;
import com.app.entities.Address;
import com.app.entities.User;
import com.app.entities.UserRole;
import com.app.repository.UserRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

@Service
public class UserService {

	@Autowired
	private ModelMapper mapper;
	
    @Autowired
    private UserRepository userRepository;
    
    @PersistenceContext
    private EntityManager entityManager;

    // Method to find all users
    public List<UserResponseDTO> findAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                    .map(user -> mapper.map(user, UserResponseDTO.class))
                    .collect(Collectors.toList());
    }
    //for admin
    public List<UserResponseDTO> findAllVendor(UserRole role) {
        List<User> users = userRepository.findAll();
        return users.stream()
                    .filter(user -> user.getRole() == UserRole.ROLE_VENDOR)  // Filter only vendors
                    .map(user -> mapper.map(user, UserResponseDTO.class))           // Map to UserDTO2
                    .collect(Collectors.toList());
    }
    
    public List<UserResponseDTO> findAllCustomer(UserRole role) {
        List<User> users = userRepository.findAll();
        return users.stream()
                    .filter(user -> user.getRole() == UserRole.ROLE_CUSTOMER)  // Filter only vendors
                    .map(user -> mapper.map(user, UserResponseDTO.class))           // Map to UserDTO2
                    .collect(Collectors.toList());
    }
    //method to find by role


    // Method to find user by ID
    public Optional<User> findUserById(Long id) {
        return userRepository.findById(id);
    }

    // Method to save a user
    public User saveUser(UserDTO userdto) {
    	User user = mapper.map(userdto, User.class);
        return userRepository.save(user);
    }
    public User saveUserVendor(AdminUpdateVendorDto uservendor) {
    	User user = mapper.map(uservendor, User.class);
        return userRepository.save(user);
    }

    // Method to delete a user
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }


    public UserDTO getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(()-> new ApiException("User not found"));
        return mapper.map(user, UserDTO.class);
        
    }
    
    
    public Optional<User> authenticateUser(String email, String password) {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            // Check if the provided password matches the user's password
            if (user.getPassword().equals(password)) {
                return Optional.of(user);
            }
        }
        return Optional.empty();
    }
}
