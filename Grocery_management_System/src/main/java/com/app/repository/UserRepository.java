package com.app.repository;

import com.app.dto.*;
import com.app.entities.User;
import com.app.entities.UserRole;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // Find a user by email
    Optional<User> findByEmail(String email);

    // Find a user by phone number
    Optional<User> findByPhoneNo(String phoneNo);

    boolean existsByEmail(String email);
    
    public User findByEmailAndPassword(String mail, String pass);
    
    // Additional custom queries can be added here later
//    public User findByRole(UserRole role);
    
    public List<UserResponseDTO> findByRole(UserRole role);
}

