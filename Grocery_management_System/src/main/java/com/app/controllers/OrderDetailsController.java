package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.OrderDetailsDTO;
import com.app.service.OrderDetailsService;

@RestController
@RequestMapping("/orderdetails")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderDetailsController {

    @Autowired
    private OrderDetailsService orderDetailsService;

    @GetMapping
    public ResponseEntity<List<OrderDetailsDTO>> getAllOrderDetails() {
        List<OrderDetailsDTO> orderDetailsList = orderDetailsService.getAllOrderDetails();
        
        return ResponseEntity.ok(orderDetailsList);
        
 
    }
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<OrderDetailsDTO>> getOrderDetailsByUserId(@PathVariable Long userId) {
        List<OrderDetailsDTO> orderDetailsList = orderDetailsService.getOrderDetailsByUserId(userId);
        return ResponseEntity.ok(orderDetailsList);
    }
}
