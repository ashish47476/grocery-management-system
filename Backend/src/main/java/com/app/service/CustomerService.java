
package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.CustomerLoginDto;
import com.app.dto.AddNewCustomerDto;
import com.app.dto.AddNewCustomerDto2;
import com.app.entities.Customer;

public interface CustomerService {
	Customer addNewCustomer(AddNewCustomerDto2 dto);
	
	List<Customer> getAllCustomer();
	
	Customer getCustomer(Long customerId);
	
	Customer getCustomerAfterLogin(CustomerLoginDto dto);
	
	Customer updateCustomer(Long customerId,AddNewCustomerDto dto);
}


















//package com.app.service;
//
//import java.util.List;
//import java.util.Optional;
//
//import com.app.dto.CustomerLoginDto;
//import com.app.dto.AddNewCustomerDto;
//import com.app.entities.Customer;
//
//public interface CustomerService {
//	Customer  addNewCustomer(AddNewCustomerDto dto);
//	
//	List<Customer> getAllCustomer();
//	
//	Customer getCustomer(Long customerId);
//	
//	Customer getCustomerAfterLogin(CustomerLoginDto dto);
//}
