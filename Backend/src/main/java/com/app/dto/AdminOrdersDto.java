package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AdminOrdersDto {
	
	private Long quantity;
	
	private LocalDate orderDate;
	
		
	private double vendorProductPrice;	
	
	//vendorProductId
	
	//qty,orderDate,vendorProductPrice

}