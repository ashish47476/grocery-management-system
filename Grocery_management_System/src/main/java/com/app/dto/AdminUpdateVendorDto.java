package com.app.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdminUpdateVendorDto {
	
	@JsonIgnore
    private Long id;
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNo;
    @JsonIgnore
    private String role;
    
    private String password;

}
