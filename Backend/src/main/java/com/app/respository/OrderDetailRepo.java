package com.app.respository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.dto.HomeProdRespoDTO;
import com.app.dto.OrderDetailsDto;
import com.app.dto.OrderDetailsQtySumDTO;
import com.app.dto.Top10product;
import com.app.entities.OrderDetails;

public interface OrderDetailRepo extends JpaRepository<OrderDetails, Long> {
	
	@Query("select od from OrderDetails od where od.orders.orderId=:orderId")
	List<OrderDetails> findOrderDetailsByOrderId(Long orderId);
	
	@Query("SELECT SUM(od.amount) FROM OrderDetails od WHERE od.orders.orderId =:orderId GROUP BY od.orders.orderId")
	Long findTotalSumOfProducts(Long orderId);
	
	void deleteByOdId(Long odId);
	
	@Query("SELECT new com.app.dto.OrderDetailsQtySumDTO(vp.productName, SUM(od.quantity)) FROM OrderDetails od JOIN od.product p JOIN od.product.vendorProduct vp GROUP BY od.product.productId")	
	List<OrderDetailsQtySumDTO> findTotalQtyOfSelledProducts();
	
//	@Query("SELECT new com.app.dto.HomeProdRespoDTO(vpp.productId,vp.productName,vp.productDesc,
	//vp.productMfgDate,vp.productExpDate,vpp.productPrice, vpp.pq) 
	//from VendorProducts vp join vp.product vpp")
//    List<HomeProdRespoDTO> listOfProd();
	
	
	
//	List<OrderDetailsDto> findAll();
	
//*****************?????????????????????????**********************
	
//	@Query("SELECT od.product.productId, SUM(od.quantity) as sum FROM OrderDetails od GROUP BY od.product.productId ORDER BY sum ")
//	List<Object[]> findTop10Products();

	

	
	
	//void deleteBy(Long odId);
}
