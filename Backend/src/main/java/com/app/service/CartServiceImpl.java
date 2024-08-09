package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.CartProductDto;
import com.app.dto.CartProductDto2;
import com.app.dto.CartRespDTO;
import com.app.entities.Cart;
import com.app.entities.Customer;
import com.app.entities.Product;
import com.app.respository.CartRepo;
import com.app.respository.CustomerRepo;
import com.app.respository.ProductRepo;
import com.app.respository.VendorProductRepo;

@Service
@Transactional
public class CartServiceImpl implements CartService {

	@Autowired
	private CartRepo cartRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private CustomerRepo customerRepo;
	
	private Cart cart;
	
	@Autowired
	private ProductRepo productRepo;
	
	@Autowired
	private VendorProductRepo vendorProductRepo;
	
	@Override
	public List<CartRespDTO> getAllCarts(Long customID) {
		
		List<Cart> cartList = cartRepo.findByCustomer(customID);
				
		return cartList.stream() // Stream<Emp>
				.map(cart -> mapper.map(cart,CartRespDTO.class)) // Stream<DTO>
				.collect(Collectors.toList());
	}
	
	
	@Override
	public Cart addToCart(CartRespDTO dto) {
		Cart cart=cartBycustIdProductId(dto.getCustomerId(),dto.getProductId());
		System.out.println("cart------"+cart);
		if(Objects.isNull(cart)){
			Cart cart1=mapper.map(dto, Cart.class);
			cart1.setCustomer(customerRepo.findByCustomerId(dto.getCustomerId()));
			cart1.setProduct(productRepo.findByProductId(dto.getProductId()));
			cart1=cartRepo.save(cart1);
			System.out.println("cart1========="+cart1);
			return cart1;
		}	
		else {
		cart.setQty(cart.getQty()+dto.getQty());
		return cartRepo.save(mapper.map(dto, Cart.class)); 
		}
		
	}
	
	@Override
	public Cart cartBycustIdProductId(Long customerId,Long productId) {
		List<Cart> cart=cartRepo.findByCustomerIdAndProductId(customerId,productId);
		System.out.println("List of Cart------"+cart.toString());
		if(cart.size()>=1)
			return cart.get(0);
		return null;
	}

//	@Override
//	public String addToCart(CartRespDTO dto) {
//
//		Customer customer=customerRepo.findById(dto.getCustomerId()).
//				orElseThrow(() -> new ResourceNotFoundException("Invalid cat Id !!"));
//		
//		Product product=productRepo.findById(dto.getProductId()).
//				orElseThrow(() -> new ResourceNotFoundException("Invalid cat Id !!"));
//		
//		 cart = mapper.map(dto, Cart.class);
//		cart.setCustomer(customer);
//			
//		cart.setProduct(product);
//		
//		cartRepo.save(cart);
//
//		return "product added";
//
//	}
	
	@Override
	public String deleteCartByProductId(Long cartId) {
		// TODO Auto-generated method stub
		//Product p = productRepo.findById(productId).orElseThrow(() -> new ResourceNotFoundException("Invalid cat Id !!"));
;
		
//		Cart cart = cartRepo.findByProduct(p);
		
		cartRepo.deleteById(cartId);

		return "deleted successfully";
	}
	
	@Override
	public List<CartProductDto2> getCartAnonymous(Long customerID) {
		// TODO Auto-generated method stub
		
		List<CartProductDto> list = vendorProductRepo.listofCartProducts(customerID);
		
		List<CartProductDto2> list2 = new ArrayList<CartProductDto2>();
		for(int i= 0; i<list.size();i++)
		{
			CartProductDto2 dto = new CartProductDto2();
			dto.setCartId(list.get(i).getCartId());
			dto.setProductName(list.get(i).getProductName());
			dto.setPmanufacturer(list.get(i).getPmanufacturer());
			dto.setProductPrice(list.get(i).getProductPrice());
			dto.setQty(list.get(i).getQty());
			int qty = list.get(i).getQty();
			double price = list.get(i).getProductPrice();
			
			double totalAmount = qty*price;
			
			dto.setTotalAmount(totalAmount);
			
			list2.add(dto);
		}
		return list2;
	}

	@Override
	public Integer getCartQty(Long customerId) {
		System.out.println("qty-----"+cartRepo.getQty(customerId));
		return cartRepo.getQty(customerId);
	}
	
	
}
