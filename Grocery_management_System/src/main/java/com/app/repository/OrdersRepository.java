package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Orders;

public interface OrdersRepository extends JpaRepository<Orders, Long> {
}
