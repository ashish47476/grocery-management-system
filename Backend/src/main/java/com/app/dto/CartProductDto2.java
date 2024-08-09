package com.app.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CartProductDto2 {
	
	//product desc
	
	private Long cartId;

	
	private String productName;
	
	private String pmanufacturer;


	private int qty;
	
	private double productPrice ;
	
	private double totalAmount;
	
//	public CartProductRepo2(String productDesc, int qty, double productPrice) {
//		super();
//		this.productDesc = productDesc;
//		this.qty = qty;
//		this.productPrice = productPrice;
//	}

}