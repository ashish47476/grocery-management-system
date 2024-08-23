package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.entities.Address;
import com.app.entities.User;
import com.app.repository.AddressRepository;
import com.app.repository.UserRepository;
import com.app.dto.AddressDTO;
import com.app.custom_exceptions.*;
import org.modelmapper.ModelMapper;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper mapper;

    public Address saveAddress(Long userId, AddressDTO addressDto) {
        Address address = mapper.map(addressDto, Address.class);
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ApiException("User not found"));
        address.setUser(user);
        user.setAddress(address); // Optional: Set the address to the user entity
        return addressRepository.save(address);
    }

    public AddressDTO getAddressByUserId(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ApiException("User not found"));
        return mapper.map(user.getAddress(), AddressDTO.class);
    }
    
    public Address updateAddress(Long userId, AddressDTO addressDto) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ApiException("User not found"));

        Address existingAddress = user.getAddress();
        if (existingAddress == null) {
            throw new ApiException("Address not found for this user");
        }

        mapper.map(addressDto, existingAddress);
        existingAddress.setUser(user);
        return addressRepository.save(existingAddress);
    }

   }