
package com.app.controller;

import javax.persistence.criteria.Order;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.AdminOrdersDto;
import com.app.dto.OrdersDto;
import com.app.entities.Customer;
import com.app.entities.Orders;
import com.app.respository.CustomerRepo;
import com.app.respository.OrderRepo;
import com.app.service.AdminOrderService;
import com.app.service.OrderService;

import lombok.Delegate;

@RestController
@RequestMapping("/adminorder")
@Validated
@CrossOrigin(origins = "*")
public class AdminOrderController {
		

	
	@Autowired
	AdminOrderService adminOrderService;
	
	@PostMapping("/{vendorProductId}")
	public ResponseEntity<?> placeOrder(@RequestBody @Valid AdminOrdersDto dto, @PathVariable Long vendorProductId)
	{	
		return ResponseEntity.ok(adminOrderService.insertNewOrder(vendorProductId, dto));

	}
	
	@GetMapping
	public ResponseEntity<?> getAllAdminOrders()
	{	
		return ResponseEntity.ok(adminOrderService.getListOfAdminOrders());

	}
	
}