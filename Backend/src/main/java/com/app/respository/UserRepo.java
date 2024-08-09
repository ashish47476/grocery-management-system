package com.app.respository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.User;

public interface UserRepo extends JpaRepository<User, Long>{
	
	public User findByEmailAndPassword(String mail, String pass);

	public Optional<User> findByEmail(String mail);

	boolean existsByEmail(String email);

}
