package com.app.dto;
import java.time.LocalDate;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ShowWholeProductDto {


//productId -----product name------Product price------productImage----Product mfgDate/expDate ----desc-------manufacturer  
	
	private Long productId;
	
	private Long vendorProductId;

	
	private String productName;
	
	private String pmanufacturer;
	
	private double productPrice ;
	
//	private String img;
	
	private LocalDate productMfgDate;

	private LocalDate productExpDate;
	
	private String productDesc;

	public ShowWholeProductDto(Long productId, Long vendorProductId, String productName, String pmanufacturer,
			double productPrice, LocalDate productMfgDate, LocalDate productExpDate, String productDesc) {
		super();
		this.productId = productId;
		this.vendorProductId = vendorProductId;
		this.productName = productName;
		this.pmanufacturer = pmanufacturer;
		this.productPrice = productPrice;
		this.productMfgDate = productMfgDate;
		this.productExpDate = productExpDate;
		this.productDesc = productDesc;
	}

	

	
	


}

