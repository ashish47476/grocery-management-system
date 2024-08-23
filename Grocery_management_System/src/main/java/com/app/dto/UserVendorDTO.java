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
public class UserVendorDTO {
	
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNo;
    @JsonIgnore
    private String role;
    private String password;

}
