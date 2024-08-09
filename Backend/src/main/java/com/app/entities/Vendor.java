package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity 
@Table(name = "Vendor") 
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = {"products","user"})
public class Vendor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="vid")
	private Long vendorId;
	
	@Column(name="fname",length =20)
	private String fname;
	
	@Column(name="lname",length =20)
	private String lname;
	
	@Column(length = 20, nullable = false)
	private String email;
	
	@Column(length = 20, nullable = false)
	private String password;
	
	@Column(length = 10, nullable = false)
	private String mobile; 	
	
	@Column(length = 13 ,columnDefinition = "VARCHAR(13) DEFAULT 'vendor'")
	private String role;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name= "user_id")
	@JsonIgnore
	private User user;
	
	@OneToMany(mappedBy = "vendor", 
			cascade = CascadeType.ALL, 
			orphanRemoval = true /* , fetch = FetchType.EAGER */ )
	@JsonIgnore //To tell Jackson : ignore this property during ser n de-ser.
	//@JsonIgnoreProperties 
	private List<VendorProducts> products = new ArrayList<>();
	
	public void addProducts(VendorProducts p) {
		products.add(p);// dept --> emp
		p.setVendor(this);// emp --> dept
	}
	
	
//	public void removeEmployee(VendorProducts p) {
//		products.remove(p);
//		p.setVendor(null);
//	}
	
}
