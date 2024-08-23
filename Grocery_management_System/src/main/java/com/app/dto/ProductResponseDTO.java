package com.app.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ProductResponseDTO {

    private Long id;
    private String prodName;
    private LocalDate productMfgDate;
    private LocalDate productExpDate;
    private double productPrice;
    private int productQuantity;
    private String prodManufact;
    private Long categoryId; // Reference to Category ID
}
