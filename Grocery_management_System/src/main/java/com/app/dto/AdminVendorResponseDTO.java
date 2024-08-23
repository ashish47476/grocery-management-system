package com.app.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class AdminVendorResponseDTO {
	
    private Long id;
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNo;
    @JsonIgnore
    private String role;
    @JsonIgnore
    private String password;

}
