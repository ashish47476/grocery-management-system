package com.app.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ProductPostDTO {
	
	@JsonIgnore
	private Long id;
    private String prodName;
    private LocalDate productMfgDate;
    private LocalDate productExpDate;
    private double productPrice;
    private int productQuantity;
    private String prodManufact;
    @JsonIgnore
    private Long categoryId; // Reference to Category ID

}
