package com.app.service;

import java.util.List;

import com.app.dto.OrderDetailsDTO;

public interface OrderDetailsService {
    List<OrderDetailsDTO> getAllOrderDetails();


	public List<OrderDetailsDTO> getOrderDetailsByUserId(Long userId);
}
