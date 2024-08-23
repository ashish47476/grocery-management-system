package com.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ProductImageDTO;
import com.app.dto.ProductPostDTO;
import com.app.dto.ProductResponseDTO;
import com.app.dto.VendorProductsDTO;
import com.app.entities.Products;

public interface ProductService {
	public ProductResponseDTO createProduct(Long categoryId, ProductPostDTO productDTO);
//    ProductResponseDTO updateProduct(Long id, ProductResponseDTO productDTO);
    void deleteProduct(Long id);
    ProductResponseDTO getProductById(Long id);
    List<ProductResponseDTO> getAllProducts();
    public ProductPostDTO updateProduct(Long id, ProductPostDTO productDTO);
    
//    public String createProductImg(MultipartFile file,ProductResponseDTO productDTO) throws IOException;
    public ProductImageDTO addProductWithImage(Long categoryId, ProductImageDTO productDTO, MultipartFile imageFile) throws IOException;
    
    public List<VendorProductsDTO> getAllProductsforVendor();
}
