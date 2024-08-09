package com.app.entities;


import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity 
@Table(name = "admin_order_details") 
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude= "vendorproduct")
public class AdminOrders {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "admin_order_id")
	private Long adminOrderId;
	
	private LocalDate orderDate;
	
	@ManyToOne
	@JoinColumn(name="vendor_product_id")
	private VendorProducts vendorproduct;
		
	private Long quantity;
	
	private double vendorProductPrice;
}
