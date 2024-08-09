package com.app.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.CustomerLoginDto;
import com.app.dto.LoginDto;
import com.app.dto.AddNewCustomerDto;
import com.app.entities.Address;
import com.app.entities.Admin;
import com.app.entities.Customer;
import com.app.respository.AdminRepo;
import com.app.respository.CustomerRepo;


@Service
@Transactional
public class AdminServiceImpl implements AdminService{

	@Autowired
	private ModelMapper mapper;
	@Autowired
	private AdminRepo adminRepo;
	
	
	
	

	@Override
	public Admin getAdminLogin(LoginDto dto) {
		// TODO Auto-generated method stub
		
		Admin admin  =  adminRepo.findByEmail(dto.getEmail());
		
		System.out.println("before comparing pass"+ admin);
//		System.out.println("comparison res---"+ admin.getPassword().equals(dto.getPassword()));
		
		if(admin.getEmail().equals(dto.getEmail()) && admin.getPassword().equals(dto.getPassword())) {
			
			System.out.println("Pass matched for login---"+dto.getPassword());
			return admin;
		}
		else
			admin = null;
		
		return admin;
		
	
	}
	
	
	
}