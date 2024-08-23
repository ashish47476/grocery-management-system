package com.app.dto;

import java.time.LocalDate;
import java.util.List;

import com.app.entities.Products;
import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrdersDTO {
	
	@JsonIgnore
    private Long id; // To hold the ID of the order
	@JsonIgnore
    private Long userId; // Assuming you want to transfer the user ID only
    private String paymentType;
    
    private List<ProductResponseDTO> prodList;
    private double totalPrice;
    private String paymentStatus;
    private LocalDate orderDate;
}
