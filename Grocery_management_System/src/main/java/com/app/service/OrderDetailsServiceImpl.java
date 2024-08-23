package com.app.service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.custom_exceptions.ApiException;
import com.app.dto.OrderDetailsDTO;
import com.app.entities.OrderDetails;
import com.app.entities.Orders;
import com.app.entities.User;
import com.app.repository.OrderDetailsRepository;
import com.app.repository.OrdersRepository;
import com.app.repository.UserRepository;

import io.swagger.v3.oas.models.responses.ApiResponse;

@Service
public class OrderDetailsServiceImpl implements OrderDetailsService {

    @Autowired
    private OrderDetailsRepository orderDetailsRepository;
    
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private OrdersRepository ordersRepository;
    
    @Autowired
    private UserRepository userRepo;

    @Autowired
    private ModelMapper mapper;
    @Override
    public List<OrderDetailsDTO> getAllOrderDetails() {
        List<OrderDetails> orderDetailsList = orderDetailsRepository.findAll();
        return orderDetailsList.stream()
                .map(OrderDetailsDTO::new)
                .collect(Collectors.toList());
    }

    public List<OrderDetailsDTO> getOrderDetailsByUserId(Long userId) {
        // Fetch all orders for the user
    	User u = userRepo.findById(userId).orElseThrow();
    	
    	
    	
          List<Orders> orders = u.getOrders();

        // Extract OrderDetails from those orders
        List<OrderDetails> orderDetailsList = orders.stream()
                                                    .flatMap(order -> order.getOrderDetailsList().stream())
                                                    .collect(Collectors.toList());

        // Map OrderDetails entities to DTOs
        return orderDetailsList.stream()
                               .map(orderDetail -> mapper.map(orderDetail, OrderDetailsDTO.class))
                               .collect(Collectors.toList());
    }
    
    
  
}
