package com.app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class OrderDetailsDto {
	//private Long orderDetailsId;
	
	

	@JsonProperty(access = Access.READ_ONLY) //used during serialization
	private Long odId;
	
	private Long orderId;
	
	private Double amount;
	
	private Long productId;
	private String productName;
	private Long categoryId;
	private String categoryName;
	private Long subCatId;
	private String subCatName;
	
	private  Long vendorId;
	private String VendorFname;
	
	private Long customerId;
	private String CustomerFname;
	
	private Long quantity;
	
}
