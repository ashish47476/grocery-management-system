package com.app.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.AddNewCustomerDto;
//import com.app.dao.AdminDao;
//import com.app.dao.FacultyDao;
//import com.app.dao.StudentDao;
//import com.app.dto.AdminAddReq;
//import com.app.dto.AdminAddResp;
//import com.app.dto.AuthRequest;
import com.app.dto.AddNewCustomerDto2;
import com.app.dto.AuthRequest;
import com.app.entities.AuthRespForAdmin;
//import com.app.dto.AuthRequest;
//import com.app.entities.AuthRespForAdmin;
//import com.app.dto.AuthResp;
//import com.app.entities.AuthRespForAdmin;
import com.app.entities.Customer;
//import com.app.entities.Technician;
//import com.app.entities.Technician;
//import com.app.dto.AuthRespForStudent;
//import com.app.dto.AuthRespForfaculty;
//import com.app.dto.FacultyRespDto;
//import com.app.dto.StudentRespDto;
//import com.app.entities.Technician;
//import com.app.entities.Faculty;
//import com.app.entities.Student;
import com.app.entities.User;
import com.app.jwt_utils.JwtUtils;
import com.app.respository.CustomerRepo;
//import com.app.respository.TechnicianRepo;
import com.app.security.CustomUserDetails;
import com.app.service.CustomerService;
import com.app.service.UserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/auth")
@Slf4j
@CrossOrigin(origins = "*")
public class AuthController {
//dep : JWT utils : for generating JWT
	@Autowired
	private JwtUtils utils;
	
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private AuthenticationManager manager;
	// dep : Auth mgr
	
	@Autowired
	private CustomerRepo customerRepo;
	//private AuthenticationManager manager;
	// dep : user service for handling users
//	@Autowired
//	private UserService userService;
	
//	@Autowired
//	private TechnicianService technicianService;
//	
//	@Autowired
//	private TechnicianRepo technicianRepo;
	
//	@Autowired
//	private ModelMapper mapper;
	
//	@Autowired
//	private StudentDao studentdao;
//	
//	@Autowired
//	private FacultyDao facultydao;

	// add a method to authenticate user . In case of success --send back token ,
	// o.w  send back err mesg

	
	
	
//	
//	@PostMapping("/student/signin")
//	public ResponseEntity<?> validateUserCreateTokenForStudent(@RequestBody @Valid AuthRequest request) {
//		// store incoming user details(not yet validated) into Authentication object
//		// Authentication i/f ---> implemented by UserNamePasswordAuthToken
//		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(request.getEmail(),
//				request.getPassword());
//		log.info("auth token " + authToken);
//	//	try {
//			// authenticate the credentials
//			Authentication authentication = manager.authenticate(authToken);
//			log.info("auth token again " + authentication.getPrincipal().getClass());
//			CustomUserDetails userDetails=(CustomUserDetails)authentication.getPrincipal();
//			User user = userDetails.getUser();
//			
//			
//			Student student = studentdao.findByUserId(user.getId());
//			//Admin admin = adminDao.findByUserId(user.getId());
//			StudentRespDto st = mapper.map(student, StudentRespDto.class);
////			AdminAddResp a = mapper.map(admin, AdminAddResp.class);
//			
//	//		Admin admin = adminDao.findByEmailAndPassword(user.getEmail(),user.getPassword()).orElseThrow(() -> new ResourceNotFoundException("Invalid email or password id !!!"));
//			AuthRespForStudent resp = mapper.map(user,AuthRespForStudent.class);
//			resp.setStudent(st);
//			resp.setToken(utils.generateJwtToken(authentication));
////			resp.setFirstName(admin.getFirstName());
////			resp.setLastName(admin.getLastName());
//			// => auth succcess
//			return ResponseEntity.ok(resp);
//	//		return ResponseEntity.ok(new AuthResp("Auth successful!", utils.generateJwtToken(authenticatedDetails)));
////		} catch (BadCredentialsException e) { // replaced  by a method in global exc handler
////			// send back err resp code
////			System.out.println("err " + e);
////			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
////		}
//	}
//	
//	
//	@PostMapping("/faculty/signin")
//	public ResponseEntity<?> validateUserCreateTokenForFaculty(@RequestBody @Valid AuthRequest request) {
//		// store incoming user details(not yet validated) into Authentication object
//		// Authentication i/f ---> implemented by UserNamePasswordAuthToken
//		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(request.getEmail(),
//				request.getPassword());
//		log.info("auth token " + authToken);
//	//	try {
//			// authenticate the credentials
//			Authentication authentication = manager.authenticate(authToken);
//			log.info("auth token again " + authentication.getPrincipal().getClass());
//			CustomUserDetails userDetails=(CustomUserDetails)authentication.getPrincipal();
//			User user = userDetails.getUser();
//			
//			
//
//			Faculty faculty = facultydao.findByUserId(user.getId());
//			
//			FacultyRespDto fc = mapper.map(faculty, FacultyRespDto.class);
//			
//
//
//			
//	//		Admin admin = adminDao.findByEmailAndPassword(user.getEmail(),user.getPassword()).orElseThrow(() -> new ResourceNotFoundException("Invalid email or password id !!!"));
//			AuthRespForfaculty resp = mapper.map(user,AuthRespForfaculty.class);
//			resp.setFaculty(fc);
//			resp.setToken(utils.generateJwtToken(authentication));
////			resp.setFirstName(admin.getFirstName());
////			resp.setLastName(admin.getLastName());
//			// => auth succcess
//			return ResponseEntity.ok(resp);
//	//		return ResponseEntity.ok(new AuthResp("Auth successful!", utils.generateJwtToken(authenticatedDetails)));
////		} catch (BadCredentialsException e) { // replaced  by a method in global exc handler
////			// send back err resp code
////			System.out.println("err " + e);
////			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
////		}
//	}
	

//	 add request handling method for user registration
//	@PostMapping("/signup")
//	public ResponseEntity<?> userRegistration(@RequestBody @Valid SignupRequest technician) {
//		System.out.println("in reg user : user " );
//		// invoke service layer method , for saving : user info + associated roles info
//		return ResponseEntity.status(HttpStatus.CREATED).body(technicianService.signupTechnician2(technician));
//	}
	
	@PostMapping("/signup")
	public ResponseEntity<?> addNewCustomer(@RequestBody AddNewCustomerDto2 dto) {
		System.out.println("add new Customer " + dto);
		System.out.println("Auth COntroller");
		//Address address=addressService.findAddress(dto.getAddressId());
		//Customer customer=customerService.getCustomer(dto.getCustomerId());
		return ResponseEntity.status(HttpStatus.CREATED).body(customerService.addNewCustomer(dto));
	}
	
	
	@PostMapping("/customer/signin")
	public ResponseEntity<?> validateUserCreateToken(@RequestBody @Valid AuthRequest request) {
		// store incoming user details(not yet validated) into Authentication object
		// Authentication i/f ---> implemented by UserNamePasswordAuthToken
		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(request.getEmail(),
				request.getPassword());
		log.info("auth token " + authToken);
	//	try {
			// authenticate the credentials
			Authentication authentication = manager.authenticate(authToken);
			log.info("auth token again " + authentication.getPrincipal().getClass());
			CustomUserDetails userDetails=(CustomUserDetails)authentication.getPrincipal();
			User user = userDetails.getUser();
			
			
//			Admin admin = adminDao.findByUserId(user.getId());
//			AdminAddResp a = mapper.map(admin, AdminAddResp.class);
			
			Customer c = customerRepo.findByUserUserId(user.getUserId());
			AuthRespForAdmin a=new AuthRespForAdmin();
			a.setFirstName(c.getFirstName());
			a.setLastname(c.getLastName());
			a.setId(c.getCustomerId());
			a.setRole(c.getUser().getRole());
			a.setToken(utils.generateJwtToken(authentication));
			
			
			
//			resp.setFirstName(admin.getFirstName());
//			resp.setLastName(admin.getLastName());
			// => auth succcess
			return ResponseEntity.ok(a);
	//		return ResponseEntity.ok(new AuthResp("Auth successful!", utils.generateJwtToken(authenticatedDetails)));
//		} catch (BadCredentialsException e) { // replaced  by a method in global exc handler
//			// send back err resp code
//			System.out.println("err " + e);
//			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
//		}
	}
	
	
	
}
