package com.app.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Products extends BaseEntity {

    private String prodName;

    private LocalDate productMfgDate;

    private LocalDate productExpDate;

    private double productPrice;

    private int productQuantity;

    private String prodManufact;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "category_id")
    private Category category;
    
    @Lob
    @Column(name="profductImage",columnDefinition = "LONGBLOB")
    private byte[] productImage;

    public Long getCategoryId() {
        return (category != null) ? category.getId() : null;
    }
}
