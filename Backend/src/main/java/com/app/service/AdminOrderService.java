package com.app.service;

import java.util.List;

import com.app.dto.AddVendorDto;
import com.app.dto.AdminOrdersDto;
import com.app.dto.AdminOrdersDto2;
import com.app.dto.LoginDto;
import com.app.entities.Vendor;

public interface AdminOrderService {
	
	String insertNewOrder(Long vendorProductId,AdminOrdersDto dto);
	
	List<AdminOrdersDto2> getListOfAdminOrders();
	
}
