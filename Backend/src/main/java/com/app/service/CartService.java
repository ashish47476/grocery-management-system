
package com.app.service;

import java.util.List;

import com.app.dto.CartProductDto2;
import com.app.dto.CartRespDTO;
import com.app.entities.Cart;

public interface CartService {
	
	List<CartRespDTO> getAllCarts(Long customID);
	
//	public String addToCart(CartRespDTO dto);

	String deleteCartByProductId(Long cartId);

	Integer getCartQty(Long customerId);

	List<CartProductDto2> getCartAnonymous(Long customerID);

	Cart addToCart(CartRespDTO dto);

	Cart cartBycustIdProductId(Long customerId, Long productId);
	
}
