import { useEffect , useState } from "react"
import { toast } from "react-toastify"

import { useNavigate } from 'react-router-dom'
import { getAllAdminOrders } from "../../services/admin"
function AllAdminOrders() {

    const [orders, setOrders] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        // get the list of products from server
        console.log("in component did mount")
        AdminOrderDetails()
      }, [])


      const GotoPreviousPage=()=>{
        // console.log("You are about to book the movie : ");
        // console.log(movieDetails);
        
         
         navigate('/adminOrders');       ////** goto admin dashboard **/
        
        
    }


      const AdminOrderDetails = async () => {
        //const id = 2;
        const response = await getAllAdminOrders()
        //if (response['status'] === 'success') {
          if(response){
            console.log("getVendorProductListByVendorId ");
          //   console.log(response)
            
            setOrders(response['data'])
            console.log("this is response from backend"+response['data'])
            //setProducts(response.data)
            console.log("VendorProductResp-------------"+response)
    
        } else {
          // toast.error('Error while calling get /order api')
          console.log("Error while calling get /order api")
        }
      }





    return (  <>
    
    {/* private Long quantity;
	
	private LocalDate orderDate;
	
		
	private double vendorProductPrice;
	
	private double total; */}


<h2>Orders</h2>

    <table className="table table-striped">
      <thead>
        <tr> 
          <th>Admin Order ID</th>
          <th>Order Date</th>
          <th>Vendor Product Price</th>
          <th>Quantity</th>
          <th>total</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => {
          return(
          <tr key={order.adminOrderId}>
            <td>{order.adminOrderId}</td>
            <td>{order.orderDate}</td>
            <td>{order.vendorProductPrice}</td>
            <td>{order.quantity}</td>
            <td>{order.total}</td>
            
             
            
          </tr>
        )})}
      </tbody>
    </table>
    <button onClick={()=>GotoPreviousPage()} className='btn btn-primary'>
                            Order
                        </button>
    </>);



}

export default AllAdminOrders;