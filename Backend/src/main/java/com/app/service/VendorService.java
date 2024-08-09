package com.app.service;

import java.util.List;

import com.app.dto.AddVendorDto;
import com.app.dto.LoginDto;
import com.app.entities.Vendor;

public interface VendorService {
	Vendor addNewVendo(AddVendorDto dto);
	
	Vendor updateVendor(AddVendorDto dto);
	
	List<Vendor> getAllVendor();

	Vendor getVendorById(Long vendorId);

	Vendor getVendorLogin(LoginDto dto);
}
