package com.app.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CartProductDto {
	
	//product desc
	
	
	private Long cartId;
	
	private String productName;
	
	private String pmanufacturer;

	private int qty;
	
	private double productPrice ;

	public CartProductDto(Long cartId, String productName, String pmanufacturer, int qty, double productPrice) {
		super();
		this.cartId = cartId;
		this.productName = productName;
		this.pmanufacturer = pmanufacturer;
		this.qty = qty;
		this.productPrice = productPrice;
	}
	
	

}