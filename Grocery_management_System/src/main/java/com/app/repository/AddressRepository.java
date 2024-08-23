package com.app.repository;

import com.app.dto.AddressDTO;
import com.app.entities.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

    // Find all addresses by user ID
    List<Address> findByUserId(Long userId);


	

    // Additional custom queries can be added here
}
