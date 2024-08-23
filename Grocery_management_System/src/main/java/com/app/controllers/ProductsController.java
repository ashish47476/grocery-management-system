package com.app.controllers;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ProductImageDTO;
import com.app.dto.ProductPostDTO;
import com.app.dto.ProductResponseDTO;
import com.app.dto.VendorProductsDTO;
import com.app.entities.Products;
import com.app.service.ProductService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductsController {

    @Autowired
    private ProductService productService;

    @PostMapping("/{categoryId}")
    public ProductResponseDTO createProduct(@PathVariable Long categoryId, @RequestBody ProductPostDTO productDTO) {
        return productService.createProduct(categoryId, productDTO);
    }
    
    
    
    @PutMapping("/{id}")
    public ResponseEntity<ProductPostDTO> updateProduct(@PathVariable Long id, @RequestBody ProductPostDTO productDTO) {
    	ProductPostDTO updatedProduct = productService.updateProduct(id, productDTO);
        return ResponseEntity.ok(updatedProduct);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        try {
            productService.deleteProduct(id);
            return ResponseEntity.ok("Product deleted successfully");
        } catch (RuntimeException e) {
            // Log the exception message for debugging
            // For example: logger.error("Failed to delete product", e);

            // Return an appropriate HTTP response with the error message
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body("Unable to delete product: " + e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> getProductById(@PathVariable Long id) {
        ProductResponseDTO product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }

    @GetMapping
    public ResponseEntity<List<ProductResponseDTO>> getAllProducts() {
        List<ProductResponseDTO> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }
    
    @GetMapping("/getAllProductsforVendor")
    public ResponseEntity<List<VendorProductsDTO>> getAllProductsforVendor() {
        List<VendorProductsDTO> products = productService.getAllProductsforVendor();
        return ResponseEntity.ok(products);
    }
//    ----------------------------------------------------------------------------------->>>>>>>>>>>>
    
    @PostMapping("/upload/{categoryId}")
    public ResponseEntity<ProductImageDTO> uploadProductImage(
            @PathVariable Long categoryId,
            @ModelAttribute ProductImageDTO productDTO,
            @RequestParam("imageFile") MultipartFile imageFile) {
        
        try {
        	ProductImageDTO savedProduct = productService.addProductWithImage(categoryId, productDTO, imageFile);
            return ResponseEntity.ok(savedProduct);
        } catch (IOException e) {
            return ResponseEntity.status(500).body(null);
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(null);
        }
    }
}
