package com.app.respository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Admin;
import com.app.entities.Customer;

public interface AdminRepo extends JpaRepository<Admin,String> {
	
	
	
	Admin findByEmail(String email);
	
	
	
}



