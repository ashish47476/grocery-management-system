package com.app.controller;



import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.dto.CustomerLoginDto;
import com.app.dto.LoginDto;
import com.app.dto.AddNewCustomerDto;
import com.app.entities.Admin;
import com.app.entities.Customer;
import com.app.service.AddressService;
import com.app.service.AdminService;
import com.app.service.CustomerService;

@RestController
@RequestMapping("/Admin")
@Validated
@CrossOrigin(origins = "*")
public class AdminController {
	@Autowired
	private AdminService adminService;
	
	
	@PostMapping("/login")
	public ResponseEntity<?> loginByEmailAndPsssword(@RequestBody LoginDto dto ) {
	//public ResponseEntity<?> findUserById( Long Id ) {
		System.out.println("Email and password in findByEmail  --" + dto);
		Admin admin=adminService.getAdminLogin(dto);
		if(admin!=null) {
			System.out.println("Afterr succesfull logn in admin cotroller--------------");
			return ResponseEntity.ok(admin);			
		}
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(admin);
	}
	
	
	
}




