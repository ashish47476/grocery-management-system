package com.app.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.AdminOrders;
import com.app.entities.Orders;

public interface AdminOrderRepo extends JpaRepository<AdminOrders, Long>{
//	Orders findByOrderId(Long orderId);
//	
//	void deleteByOrderId(Long orderId);
	
}