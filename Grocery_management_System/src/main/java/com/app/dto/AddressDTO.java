package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddressDTO {

   
    private String streetNo;

    
    private String buildingName;

    
    private String locality;

    
    private String city;

   
    private String state;

   
    private String pincode;

    // No user field in the DTO as it will be set in the service layer
}