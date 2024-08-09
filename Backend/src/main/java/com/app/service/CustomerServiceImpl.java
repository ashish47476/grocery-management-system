package com.app.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.AddNewCustomerDto;
import com.app.dto.AddNewCustomerDto2;
import com.app.dto.CustomerLoginDto;
import com.app.entities.Customer;
import com.app.entities.User;
import com.app.entities.UserRole;
import com.app.respository.CustomerRepo;
import com.app.respository.UserRepo;


@Service
@Transactional
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	private ModelMapper mapper;
	@Autowired
	private CustomerRepo customerRepo;
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Override
	public Customer addNewCustomer(AddNewCustomerDto2 dto) {
		
		
		
		
		User user = mapper.map(dto, User.class);
		
		user.setRole(UserRole.ROLE_CUSTOMER);
		user.setPassword(passwordEncoder.encode(dto.getPassword()));
		User user1 = userRepo.save(user);
		
		Customer customer = mapper.map(dto, Customer.class);
		customer.setPhone(dto.getMobileNo());
		
		customer.setUser(user1);
		System.out.println("dto in addCustomer service--"+dto);
		//Address address= addressService.findAddress(dto.getAddressId());
		//customer.setAddress(address);
		System.out.println("in customer service   --"+customer );
		customerRepo.save(customer);
//		mapper.map(customerRepo.save(customer ), addNewCustomerDto.class);
		return customer ;
	
}

	@Override
	public List<Customer> getAllCustomer() {
		return customerRepo.findAll();
	}

	@Override
	public Customer getCustomer(Long customerId) {
	Customer user = customerRepo.findByCustomerId(customerId);
		return user;

	}

	@Override
	public Customer getCustomerAfterLogin(CustomerLoginDto dto) {
		Customer customer = customerRepo.findByEmail(dto.getEmail());
		System.out.println("before comparing pass"+ customer);
		System.out.println("comparison res---"+ customer.getPassword().equals(dto.getPassword()));
		
		if(customer.getEmail().equals(dto.getEmail()) && customer.getPassword().equals(dto.getPassword())) {
			
			System.out.println("Pass matched for login---"+dto.getPassword());
			return customer;
		}
		else
			customer = null;
		
		return customer;
		
	}

	@Override
	public Customer updateCustomer(Long customerId,AddNewCustomerDto dto) {
		// TODO Auto-generated method stub
		Customer customer = customerRepo.findById(customerId)
				.orElseThrow(()->new ResourceNotFoundException("Invalid customerId"));
//		System.out.println("customer before mapper1--"+customer);
//		System.out.println("dto before mapper1--"+dto);

		mapper.map(dto, customer);
//		System.out.println("customer after mapper1--"+customer);
//		System.out.println("dto after mapper1--"+dto);
		customer.setCustomerId(customerId);
		customerRepo.save(customer);
//		System.out.println("dto2 after map2"+ dto2);
		
		return customer;
	}


	
	
	
}



























//package com.app.service;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.modelmapper.ModelMapper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.app.dto.CustomerLoginDto;
//import com.app.dto.AddNewCustomerDto;
//import com.app.entities.Address;
//import com.app.entities.Customer;
//import com.app.respository.CustomerRepo;
//
//
//@Service
//@Transactional
//public class CustomerServiceImpl implements CustomerService{
//
//	@Autowired
//	private ModelMapper mapper;
//	@Autowired
//	private CustomerRepo customerRepo;
//	
//	@Autowired
//	private AddressService addressService;
//	
//	@Override
//	public Customer addNewCustomer(AddNewCustomerDto dto) {
//		if(dto.getConfirmPassword().equals(dto.getPassword())) {
//			Customer customer = mapper.map(dto, Customer.class);
//			System.out.println("dto in addCustomer service--"+dto);
//			Address address= addressService.findAddress(dto.getAddressId());
//			customer.setAddress(address);
//			System.out.println("in customer service   --"+customer );
//			customerRepo.save(customer);
////			mapper.map(customerRepo.save(customer ), addNewCustomerDto.class);
//			return customer ;
//		}
//		return null;
//	}
//
//	@Override
//	public List<Customer> getAllCustomer() {
//		
//		return customerRepo.findAll();
//	}
//
//	@Override
//	public Customer getCustomer(Long customerId) {
//		System.out.println("in get customer -id--"+customerId);
//		Customer customer = customerRepo.findByCustomerId(customerId);
//		System.out.println(customer.getAddress());
//		System.out.println("customer----"+customer);
//		return customer;
//
//	}
//
//	@Override
//	public Customer getCustomerAfterLogin(CustomerLoginDto dto) {
//		Customer customer=customerRepo.findByEmail(dto.getEmail());
//		System.out.println("before comparing passwords"+customer);
//		System.out.println("comparison result---"+customer.getPassword().equals(dto.getPassword()));
//		if(customer.getPassword().equals(dto.getPassword())) {
//			System.out.println("Pass matched for login---"+dto.getPassword());
//			return customer;
//		}
//		else 
//			customer = null;
//		return customer;
//		
//			
//	}
//	
//	
//	
//}
