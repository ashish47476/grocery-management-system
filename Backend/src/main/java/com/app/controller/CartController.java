package com.app.controller;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.dto.CartRespDTO;
import com.app.service.CartService;

@RestController
@RequestMapping("/carts")
@Validated
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

	
	@Autowired
	private CartService cartService;
	
//	@GetMapping("/{customId}")
//	public ResponseEntity<?> getCartDetails(@PathVariable  Long customId) {
//		System.out.println("in get cart dtls " + customId);
//		return ResponseEntity.ok(cartService.getAllCarts(customId));
//	}
	
	
	@GetMapping("/{customID}")
	public ResponseEntity<?> fetchCartAnonymous(@PathVariable  Long customID) {
		System.out.println("in get getCartAnonymous " + customID);
		return ResponseEntity.ok(cartService.getCartAnonymous(customID));
	}
	
	@PostMapping
	public ResponseEntity<?> addCartDetails(@RequestBody @Valid CartRespDTO dto) {
		System.out.println("add cart Cart details " + dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(cartService.addToCart(dto));
	}
	
	@GetMapping("CartQty/{customID}")
	public ResponseEntity<?> getCartQtyByCustomerId(@PathVariable  Long customID) {
		System.out.println("in get getCartByCustIdProductId " + customID );
		return ResponseEntity.ok(cartService.getCartQty(customID));
	}
	
	@DeleteMapping("/{cartId}")
	public ResponseEntity<?> removeCartByProductId(@PathVariable Long cartId)
	{
		System.out.println("inside removeCartByProductId " + cartId);
		return ResponseEntity.ok(cartService.deleteCartByProductId(cartId));
	}
}