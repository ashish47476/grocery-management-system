package com.app.dto;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {
	@JsonIgnore
    private Long userId;
    private String paymentType;
    private List<OrderDetailsDTO> orderDetails;
    private double totalPrice;
    private String paymentStatus;
    private LocalDate orderDate;
}
