package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.Products;

public interface ProductsRepository extends JpaRepository<Products, Long> {
	
//	@Query(value="SELECT p FROM Products p WHERE p.productCategory=:category")
//	List<Products> getByProductCategory(@Param("category") String category);
}
