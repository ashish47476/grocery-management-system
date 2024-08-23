package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.OrderDTO;
import com.app.entities.Orders;
import com.app.service.OrdersService;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrdersController {

    @Autowired
    private OrdersService orderService;

    @PostMapping("/placeOrder/{id}")
    public ResponseEntity<Orders> placeOrder(@PathVariable Long id,@RequestBody OrderDTO orderDTO) {
        Orders order = orderService.placeOrder(id,orderDTO);
        return ResponseEntity.ok(order);
    }
    
    @GetMapping("/getAllOrders/{id}")
    public void listOfOrders(@PathVariable Long id){
    	
    }
}
