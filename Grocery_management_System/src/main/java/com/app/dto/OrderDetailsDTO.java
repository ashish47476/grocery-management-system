package com.app.dto;

import com.app.entities.OrderDetails;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetailsDTO {
	@JsonIgnore
    private Long id;
	@JsonIgnore
    private Long orderId;
    private Long productId;
    private int quantity;
    private double price;

    public OrderDetailsDTO(OrderDetails orderDetails) {
        this.id = orderDetails.getId();
        this.orderId = orderDetails.getOrder() != null ? orderDetails.getOrder().getId() : null;
        this.productId = orderDetails.getProduct() != null ? orderDetails.getProduct().getId() : null;
        this.quantity = orderDetails.getQuantity();
        this.price = orderDetails.getPrice();
    }
}
