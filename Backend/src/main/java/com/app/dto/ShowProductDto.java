package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ShowProductDto {
//	product id      vendorproduct _name       vendor manufacturer        price       vendorproduct _image
	
	private Long productId;
	
	private Long vendorProductId;

	
	private String productName;
	
	private String pmanufacturer;
	
	private double productPrice ;
	
	private String img;

	public ShowProductDto(Long productId,	 Long vendorProductId, String productName, String pmanufacturer, double productPrice, String img) {
		
		this.productId = productId;
		this.vendorProductId=vendorProductId;
		this.productName = productName;
		this.pmanufacturer = pmanufacturer;
		this.productPrice = productPrice;
		this.img = img;
	}
	


}
