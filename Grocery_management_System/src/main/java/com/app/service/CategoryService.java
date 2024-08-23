package com.app.service;

import com.app.custom_exceptions.ApiException;
import com.app.dto.CategoryDTO;
import com.app.dto.CategoryResponseDTO;
import com.app.entities.Category;
import com.app.repository.CategoryRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

@Service
@Transactional
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;
    
    @Autowired
    private ModelMapper mapper;

    public List<CategoryResponseDTO> findAllCategories() {
    	//persistent entity
        List<Category> categories =  categoryRepository.findAll();
        return categories.stream().map(category -> mapper.map(category,CategoryResponseDTO.class)).collect(Collectors.toList());
    }

    public Optional<Category> findCategoryById(Long id) {
        return categoryRepository.findById(id);
    }

    public Category findCategoryByName(String name) {
        return categoryRepository.findByCategoryName(name);
    }

    public List<Category> findCategoriesByDescriptionKeyword(String keyword) {
        return categoryRepository.findByCategoryDescContaining(keyword);
    }

    public Category saveCategory(CategoryDTO categorydto) {
    	
    	Category categoryEntity = mapper.map(categorydto, Category.class);
        return categoryRepository.save(categoryEntity);
    }

    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }
    
    
    public Category updateCategory(Long id, CategoryDTO categoryDTO) {
        // Find the existing category
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        // Update category fields
        category.setCategoryName(categoryDTO.getCategoryName());
        category.setCategoryDesc(categoryDTO.getCategoryDesc());

        // Save and return the updated category
        return categoryRepository.save(category);
    }

    // Additional service methods can be added here
}
