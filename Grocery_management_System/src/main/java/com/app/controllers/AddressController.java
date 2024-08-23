package com.app.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.app.dto.AddressDTO;
import com.app.entities.Address;
import com.app.service.AddressService;

@RestController
@RequestMapping("/addresses")
@CrossOrigin(origins = "http://localhost:3000")
public class AddressController {

    @Autowired
    private AddressService addressService;
    
    @Autowired
    private ModelMapper mapper;

    @PostMapping("/{userId}")
    public ResponseEntity<Address> createAddress(@PathVariable Long userId, @RequestBody AddressDTO addressDto) {
        Address savedAddress = addressService.saveAddress(userId, addressDto);
        return ResponseEntity.ok(savedAddress);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<AddressDTO> getAddressByUserId(@PathVariable Long userId) {
        AddressDTO addressDto = addressService.getAddressByUserId(userId);
        return ResponseEntity.ok(addressDto);
    }
    
    @PutMapping("/{userId}")
    public ResponseEntity<AddressDTO> updateAddress(@PathVariable Long userId, @RequestBody AddressDTO addressDto) {
        Address updatedAddress = addressService.updateAddress(userId, addressDto);
        return ResponseEntity.ok(mapper.map(updatedAddress, AddressDTO.class));
    }

}