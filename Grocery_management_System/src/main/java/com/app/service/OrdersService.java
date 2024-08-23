package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.OrderDTO;
import com.app.dto.OrderDetailsDTO;
import com.app.entities.OrderDetails;
import com.app.entities.Orders;
import com.app.entities.Products;
import com.app.entities.User;
import com.app.repository.OrderDetailsRepository;
import com.app.repository.OrdersRepository;
import com.app.repository.ProductsRepository;
import com.app.repository.UserRepository;

@Service
public class OrdersService {

    @Autowired
    private OrdersRepository ordersRepository;

    @Autowired
    private ProductsRepository productsRepository;

    @Autowired
    private OrderDetailsRepository orderDetailsRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    
    
    public Orders placeOrder(Long id,OrderDTO orderDTO) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Orders order = modelMapper.map(orderDTO, Orders.class);
        order.setUser(user);

        List<OrderDetails> orderDetailsList = orderDTO.getOrderDetails().stream()
            .map(odDTO -> {
                Products product = productsRepository.findById(odDTO.getProductId())
                        .orElseThrow(() -> new RuntimeException("Product not found"));

                OrderDetails orderDetails = modelMapper.map(odDTO, OrderDetails.class);
                orderDetails.setProduct(product);
                orderDetails.setOrder(order);
                return orderDetails;
            }).collect(Collectors.toList());

        order.setOrderDetailsList(orderDetailsList);

        ordersRepository.save(order);
        orderDetailsRepository.saveAll(orderDetailsList);

        return order;
    }
}
