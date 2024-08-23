package com.app.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.*;
import com.app.entities.Category;
import com.app.entities.Products;
import com.app.repository.CategoryRepository;
import com.app.repository.ProductsRepository;
import com.app.service.*;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductsRepository productsRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ModelMapper modelMapper;
    
    @Override
    public List<VendorProductsDTO> getAllProductsforVendor() {
        // Assuming you have a Product entity and ProductRepository
        return productsRepository.findAll().stream()
                .map(product -> new VendorProductsDTO(
                        product.getId(),
                        product.getProdName(),
                        product.getProductMfgDate(),
                        product.getProductExpDate(),
                        product.getProductPrice(),
                        product.getProductQuantity(),
                        product.getProdManufact(),
                        product.getCategoryId(),
                        product.getProductImage()
                ))
                .collect(Collectors.toList());
    }


    @Override
	public ProductResponseDTO createProduct(Long categoryId, ProductPostDTO productDTO) {
		 Products product = modelMapper.map(productDTO, Products.class);

	        // Set the category
	        if (categoryId != null) {
	            Category category = categoryRepository.findById(categoryId)
	                    .orElseThrow(() -> new RuntimeException("Category not found"));
	            product.setCategory(category);
	        }

	        product = productsRepository.save(product);
	        return modelMapper.map(product, ProductResponseDTO.class);
	}

    

    @Override
    public void deleteProduct(Long id) {
        Products product = productsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        productsRepository.delete(product);
    }

    @Override
    public ProductResponseDTO getProductById(Long id) {
    	
    	 Products product = productsRepository.findById(id)
    	            .orElseThrow(() -> new RuntimeException("Product not found"));

    	    ProductResponseDTO productDTO = modelMapper.map(product, ProductResponseDTO.class);
    	    
    	    // Manually map the categoryId
    	    if (product.getCategory() != null) {
    	        productDTO.setCategoryId(product.getCategory().getId());
    	    }

    	    return productDTO;
    }

    @Override
    public List<ProductResponseDTO> getAllProducts() {
    	 List<Products> productsList = productsRepository.findAll();
    	    
    	    return productsList.stream().map(product -> {
    	        ProductResponseDTO productDTO = modelMapper.map(product, ProductResponseDTO.class);
    	        
    	        // Manually set categoryId
    	        if (product.getCategory() != null) {
    	            productDTO.setCategoryId(product.getCategory().getId());
    	        }

    	        return productDTO;
    	    }).collect(Collectors.toList());
    }
    
//    -------------------------------------------------------------------------------------------->>>>>
    @Override
    public ProductImageDTO addProductWithImage(Long categoryId, ProductImageDTO productDTO, MultipartFile imageFile) throws IOException {
        // Find the category by ID
        Optional<Category> categoryOpt = categoryRepository.findById(categoryId);
        if (!categoryOpt.isPresent()) {
            throw new RuntimeException("Category not found");
        }
        Category category = categoryOpt.get();

        // Convert DTO to entity using ModelMapper
        Products product = modelMapper.map(productDTO, Products.class);
        product.setCategory(category);

        // Convert the image file to byte array and set it
        if (imageFile != null && !imageFile.isEmpty()) {
            product.setProductImage(imageFile.getBytes());
        }

        // Save the product
        Products savedProduct = productsRepository.save(product);

        // Convert saved entity back to DTO using ModelMapper
        return modelMapper.map(savedProduct, ProductImageDTO.class);
    }

	@Override
	 public ProductPostDTO updateProduct(Long id, ProductPostDTO productDTO) {
		
		  Products existingProduct = productsRepository.findById(id)
	                .orElseThrow(() -> new RuntimeException("Product not found"));

	        // Update product details
	        modelMapper.map(productDTO, existingProduct);

	        // Update the category if provided
	        if (productDTO.getCategoryId() != null) {
	            Category category = categoryRepository.findById(productDTO.getCategoryId())
	                    .orElseThrow(() -> new RuntimeException("Category not found"));
	            existingProduct.setCategory(category);
	        }

	        existingProduct = productsRepository.save(existingProduct);
	        return modelMapper.map(existingProduct, ProductPostDTO.class);
	}



	
    
}
