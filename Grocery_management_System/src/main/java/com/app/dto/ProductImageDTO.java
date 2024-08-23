package com.app.dto;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductImageDTO {
	
	@JsonIgnore
	private Long id;
    private String prodName;
    @DateTimeFormat(pattern = "MM-dd-yyyy")
    private LocalDate productMfgDate;

    @DateTimeFormat(pattern = "MM-dd-yyyy")
    private LocalDate productExpDate;
    private double productPrice;
    private int productQuantity;
    private String prodManufact;
    private Long categoryId; // To link to Category
    
    @JsonIgnore
    private byte[] productImage; // For handling the image data

}
