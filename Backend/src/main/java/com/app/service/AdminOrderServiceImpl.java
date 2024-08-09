package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.AdminOrdersDto;
import com.app.dto.AdminOrdersDto2;
import com.app.dto.CartRespDTO;
import com.app.entities.AdminOrders;
import com.app.entities.Cart;
import com.app.entities.OrderDetails;
import com.app.entities.Orders;
import com.app.entities.Product;
import com.app.entities.VendorProducts;
import com.app.respository.AdminOrderRepo;
import com.app.respository.CartRepo;
import com.app.respository.OrderDetailRepo;
import com.app.respository.OrderRepo;
import com.app.respository.ProductRepo;
import com.app.respository.VendorProductRepo;

@Service
@Transactional
public class AdminOrderServiceImpl implements AdminOrderService{

	
	
	@Autowired
	private VendorProductRepo vendorProductRepo;
	
	@Autowired
	private ProductRepo prodRepo;
	
	@Autowired
	private AdminOrderRepo adminOrderRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	

//	@Override
//	public void addOrder(Orders o) {
//		// TODO Auto-generated method stub
//		repo.save(o);
//		
//	}
	
	
	@Override
	public String insertNewOrder(Long vendorProductId, AdminOrdersDto dto) {
		
		VendorProducts vendorProduct = vendorProductRepo.findById(vendorProductId).orElseThrow(()-> new ResourceNotFoundException("Invalid SubCat Id"));
		
		AdminOrders order = mapper.map(dto, AdminOrders.class);
		
		order.setVendorproduct(vendorProduct);
		
		Product product = prodRepo.findByVendorProduct(vendorProduct);
		
		Long quantity = dto.getQuantity();
		
		vendorProduct.setProductQuantity((int)(vendorProduct.getProductQuantity()-quantity));
		
		product.setPq(product.getPq()+quantity);
		
		vendorProductRepo.save(vendorProduct);
		
		prodRepo.save(product);
		
		adminOrderRepo.save(order);
		
		
		
		return "order placed successfully";
	}



	@Override
	public List<AdminOrdersDto2> getListOfAdminOrders() {
		List<AdminOrders> list = adminOrderRepo.findAll();
		List<AdminOrdersDto2> list2 = new ArrayList<AdminOrdersDto2>();
		
		for(int i=0;i<list.size();i++)
		{
			AdminOrdersDto2 dto  = new AdminOrdersDto2();
			mapper.map(list.get(i), dto);
			double total=list.get(i).getQuantity()*list.get(i).getVendorProductPrice();
			dto.setTotal(total);
			dto.setAdminOrderId(list.get(i).getAdminOrderId());
			list2.add(dto);
		}
		return list2;
	}

}