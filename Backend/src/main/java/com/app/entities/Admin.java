package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity 
@Table(name = "admin") 
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = "user")
//@EqualsAndHashCode(callSuper = false, doNotUseGetters = true,of = "email")
public class Admin {
	
	
	@Column(length = 30)
	private String firstName;
	@Column(length = 30)
	private String lastName;
	@Column(length = 30, unique = true) // =>unique
	@Id
	private String email;
	@Column(nullable = false) // =>NOT NULL
	private String password;
	@Column(length = 13, unique = true)
	private String phone;
	
	@Column(length = 13 ,columnDefinition = "VARCHAR(13) DEFAULT 'admin'")
	private String role;
	
	
	
//	@OneToOne(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
//	@JsonIgnore
//    private Cart cart;
		
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name= "user_id")
	@JsonIgnore
	private User user;

	public Admin(String firstName, String lastName, String email, String password, String phone, User user) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.user = user;
	}
	
}


