package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
//import com.app.custom_exceptions.UserAlreadyExistsException;
import com.app.entities.User;

//import com.app.repository.UserDao;
import com.app.respository.UserRepo;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepo userDao;

	@Autowired
	private PasswordEncoder enc;

	@Override
	public User addUserDetails(User user) {
//		if (userRepo.existsByEmail(user.getEmail()))
//			throw new UserAlreadyExistsException("User Email already exists!!!!!");
//		// encrypt the pwd
		user.setPassword(enc.encode(user.getPassword()));
		return userDao.save(user);
	}

//	@Override
//	public void changeRole(Role role, String email) {
//		UserEntity user = userRepo.findByEmail(email)
//				.orElseThrow(() -> new ResourceNotFoundException("Invalid Email : Use not found!!!!"));
//		user.setRole(role);
//	}

}
