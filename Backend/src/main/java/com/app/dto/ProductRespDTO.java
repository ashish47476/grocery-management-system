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
public class ProductRespDTO {
	@JsonProperty(access = Access.READ_ONLY) //used during serialization
	private Long productId;
	
	private Long vendorProductId;
	
	
	private String productName;  
//	
//	private String productDesc;
	
	
	private LocalDate productMfgDate;
//	
	private LocalDate productExpDate;
	
	private Long pq ;
	
	private double productPrice ;
	
}
