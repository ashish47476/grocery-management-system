package com.app.dto;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.app.entities.UserRole;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class AddVendorDto {
	
	@JsonProperty(access = Access.READ_ONLY) //used during serialization
	private Long vendorId;
	
	private String fname;
	
	
	private String lname;
	
	
	private String email;
	
	private String password;
	
	private String mobile; 
	
//	@JsonProperty(access = Access.READ_WRITE)
	@Enumerated(EnumType.STRING)
	private UserRole role;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long userId;
	
	
	
	
}
