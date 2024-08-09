package com.app.respository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.dto.ShowProductDto;
import com.app.dto.ShowWholeProductDto;
import com.app.entities.Category;
import com.app.entities.Product;
import com.app.entities.VendorProducts;

public interface ProductRepo extends JpaRepository<Product, Long>{
	
	List<Product> findAll();
	
	
//	List<Product> findByProductName(String productName);
//	
//	List<Product> findByCategory(Category category);
	
	//select e from Employee e where e.dept.id=:id
	@Query("select p from Product p where p.vendorProduct.category.categoryId=:catId")
	List<Product> findByCategory(Long catId);


	Product findByVendorProduct(VendorProducts vendorProduct); 
	
	@Query("select p from Product p where p.vendorProduct.subcategory=:subCategoryId")
	List<Product> findBySubCategory(Long subCategoryId);
	
	@Query("select new com.app.dto.ShowProductDto(p.productId, p.vendorProduct.vendorProductId,p.vendorProduct.productName, p.vendorProduct.pmanufacturer, p.vendorProduct.productPrice,p.vendorProduct.img) from Product p Join p.vendorProduct pro Join p.vendorProduct.subcategory  where p.vendorProduct.subcategory.subCatId=:subCatId and p.pq>0")
	List<ShowProductDto> showProduct(Long subCatId);
	
	
	@Query("select new com.app.dto.ShowWholeProductDto(p.productId,p.vendorProduct.vendorProductId,p.vendorProduct.productName,p.vendorProduct.pmanufacturer,p.vendorProduct.productPrice,p.vendorProduct.productMfgDate,p.vendorProduct.productExpDate,p.vendorProduct.productDesc)from Product p Join p.vendorProduct pro   where p.productId=:productId")
	ShowWholeProductDto getWholeProduct(Long productId);


	Product findByProductId(Long productId);
	
	
}
