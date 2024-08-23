package com.app.repository;

import com.app.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    // Find category by name
    Category findByCategoryName(String categoryName);
    
    
        // Find categories with a description containing a specific keyword
    List<Category> findByCategoryDescContaining(String keyword);

    // Additional custom queries can be added here
}
