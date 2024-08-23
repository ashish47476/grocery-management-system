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
public class AddressResponseDTO {
	
	    private String streetNo;
	    private String buildingName;
	    private String locality;
	    private String city;
	    private String state;
	    private String pincode;
	    
	    @JsonIgnore
	    private Long userId; // Reference to User ID
	

}
