package com.app.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name ="user_details")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class User{
	

	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long userId;

	@Column(name = "email")
	private String email;
	
	@Column(name = "password")
	private String password;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private UserRole role;
	
//	@OneToOne(mappedBy = "user")
//	private Customer customer;
//	
//	@OneToOne(mappedBy = "user")
//	private Vendor vendor;
//	
//	@OneToOne(mappedBy = "user")
//	private Admin admin;
	
//	@OneToOne(mappedBy = "user")
//	private Technician technician;
//	
//	@OneToOne(mappedBy = "user")
//	private Customer customer;
	
//	@OneToOne(mappedBy = "user")
//	private Student student;

}
