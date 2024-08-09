package com.app.entities;


//import com.app.entities.Admin;
import com.app.entities.UserRole;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class AuthRespForAdmin {
	private Long id;

  //	private AdminAddResp admin;

	private String firstName;
	private String lastname;
	
	private UserRole role;

	private String token;
}
