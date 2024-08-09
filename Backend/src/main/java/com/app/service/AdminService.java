package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.CustomerLoginDto;
import com.app.dto.LoginDto;
import com.app.dto.AddNewCustomerDto;
import com.app.entities.Admin;
import com.app.entities.Customer;

public interface AdminService {
	

	Admin getAdminLogin(LoginDto dto);
}


