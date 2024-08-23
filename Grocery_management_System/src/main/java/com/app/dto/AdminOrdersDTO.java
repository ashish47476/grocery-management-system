package com.app.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AdminOrdersDTO {
    private Long id;
    private LocalDate orderDate;
    private Long productId; // Reference to Product ID
    private Long quantity;
}
