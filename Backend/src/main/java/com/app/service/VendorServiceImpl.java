package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.AddVendorDto;
import com.app.dto.LoginDto;
import com.app.entities.Customer;
import com.app.entities.User;
import com.app.entities.UserRole;
import com.app.entities.Vendor;
import com.app.respository.UserRepo;
import com.app.respository.VendorRepo;

@Service
@Transactional
public class VendorServiceImpl implements VendorService{

	@Autowired
	private VendorRepo vendorRepo;
	
	@Autowired
	private UserRepo userDao;
	
	
	private User user;
	
	@Autowired
	UserServiceImpl userimpl;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Autowired
	private ModelMapper mapper;
	@Override
	public Vendor addNewVendo(AddVendorDto dto)
	{
		System.out.println("dto====="+dto);
		//Vendor vendor =mapper.map(dto, Vendor.class);
				//System.out.println("vendor-----"+ vendor);
				
				User user = mapper.map(dto, User.class);
				
				user.setRole(UserRole.ROLE_VENDOR);
				user.setPassword(passwordEncoder.encode(dto.getPassword()));
				User user1 = userDao.save(user);
//				
				Vendor vendor = mapper.map(dto, Vendor.class);
				vendor.setMobile(dto.getMobile());
//				
				
				vendor.setUser(user1);
				vendor.setRole("ROLE_VENDOR");
				System.out.println("dto in addVendor service--"+dto);
//				//Address address= addressService.findAddress(dto.getAddressId());
//				//customer.setAddress(address);
				System.out.println("in vendor service   --"+vendor );
				vendorRepo.save(vendor);
////				mapper.map(customerRepo.save(customer ), addNewCustomerDto.class);
				return vendor;

				
		
	}

	@Override
	public Vendor updateVendor(AddVendorDto dto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Vendor> getAllVendor() {
		// TODO Auto-generated method stub
		return vendorRepo.findAll();
	}

	@Override
	public Vendor getVendorById(Long vendorId) {
		// TODO Auto-generated method stub
	return vendorRepo.findById(vendorId).orElseThrow(()-> new ResourceNotFoundException("Invalid Id"));
		
	}
	
	@Override
	public Vendor getVendorLogin(LoginDto dto) {
		
		
		
		Vendor v = vendorRepo.findByEmail(dto.getEmail());
		System.out.println("before comparing vendor"+ v);
		if(v.getEmail().equals(dto.getEmail()) && v.getPassword().equals(dto.getPassword()))
		{
			System.out.println("Login Details matched---");
			return v;
		}
		else
		{
			System.out.println("Login Details didn't matched---");
			v= null;
		}
		return v;
	
		
	}



}
