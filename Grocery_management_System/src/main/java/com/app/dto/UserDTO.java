package com.app.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDTO {
	
	@JsonIgnore
    private Long id;
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNo;
    @JsonIgnore
    private String role;
    private String password;
    // Omitting password and other sensitive fields for security
}
