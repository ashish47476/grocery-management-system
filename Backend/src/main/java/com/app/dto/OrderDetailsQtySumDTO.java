package com.app.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class OrderDetailsQtySumDTO {
	private String productName;
	
	private Long quantity;

	public OrderDetailsQtySumDTO(String productName, Long quantity) {
		super();
		this.productName = productName;
		this.quantity = quantity;
	}
	
	
}