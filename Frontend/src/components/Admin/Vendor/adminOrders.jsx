import { useState } from 'react'

import { useParams ,useNavigate} from 'react-router-dom'

import { toast } from "react-toastify"

import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card'

import {placeOrderForAdmin} from '../../../services/admin'
import "../../../styles.css"
import "../../../navbar.css"



function AdminOrders() {

  const navigate = useNavigate()

  const {vendorProductId} = useParams()

  const [currentDate, setCurrentDate] = useState(new Date())

    const [qty, setqty] = useState(1);

    const [price, setPrice] = useState('');

 

  const increaseQty = () => {
    setqty(qty + 1);
  };

  const decreaseQty = () => {
    if (qty > 1) {
      setqty(qty - 1);
    }
  };

  const placeOrder = async () => {
    
    //const id = 2;
    const productId = sessionStorage.getItem('vendorProductId')

    const formattedDate = currentDate.toISOString().split('T')[0];

    const vendorProductPrice = sessionStorage.getItem('vendorProductPrice')

    console.log(`vendor product price is ${vendorProductPrice}`);

    const response = placeOrderForAdmin(productId, qty,formattedDate,vendorProductPrice)  

    
    toast.success('Products Added To Inventory')
    navigate('/vendorList')
  };

  

  return (
    <>
  {/* //   <div className="container">
  //   <h2 className="mt-3">Product Order</h2>
  //   <p>qty: {qty}</p>
  //   <button variant="danger" onClick={decreaseqty}>-</button>{' '}
  //   <button variant="success" onClick={increaseqty}>+</button>{' '}
  //   <button variant="primary" onClick={()=>placeOrder({qty})}>Place Order</button>
  // </div> */}
  <div className="background-container2">
    <br></br>
    <br></br>
    <br></br>
    <div className='input-box-admin'>
    <br></br>
      <div className="text-center">
        <h1 className="mb-4">Product Order</h1>
        <p className="mb-3">Product Name: {sessionStorage.getItem('prodname')}</p>
        <p>Product Manufacturer: {sessionStorage.getItem('prodmanufacturer')}</p>
      </div>

      <div className="text-center mt-4">
        <h5>Quantity:</h5>
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="danger" onClick={decreaseQty}>
            -
          </Button>
          <Card.Text className="mx-4 mt-2">{qty}</Card.Text>
          <Button variant="success" onClick={increaseQty}>
            +
          </Button>
        </div>
      </div>

      <div className="text-center mt-4">
        <h5>Set Price</h5>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Price"
        />
        <br />
        <br></br>
        
        <Button className="custom-button2" onClick={placeOrder}>
          Place Order
        </Button>

        </div>
      </div>
    </div>
    <nav className='navbar navbar-expand-sm bg-success navbar-dark sticky-top' >
        <div>    </div>
         <div style={{ textAlign: 'center'}}>GroceryBuddy. ©2024. All Rights Reserved</div> 
</nav>
</>
  );
}

export default AdminOrders;













// import { useState } from 'react'

// import { useNavigate, useParams } from 'react-router-dom'

// // import Button from 'react-bootstrap/Button';

// import {placeOrderForAdmin} from '../../../services/product'
// import { toast } from 'react-toastify';


// function AdminOrders() {

//   const {vendorProductId} = useParams()

//     const [qty, setqty] = useState(1);

//   const navigate = useNavigate();

//   const increaseqty = () => {
//     setqty(qty + 1);
//   };

//   const decreaseqty = () => {
//     if (qty > 1) {
//       setqty(qty - 1);
//     }
//   };

//   const placeOrder = async (qty2) => {
    
//     //const id = 2;
//     const productId = sessionStorage.getItem('vendorProductId')
//     placeOrderForAdmin(productId, qty)
//     const vId = sessionStorage.getItem('vId')  
//     toast.success('order placed successfully')
    
//     navigate(`/vendorProductList/${vId}`)
//     console.log(`Placing order for ${qty} product(s)`);
//   };

//   return (
//     <div className="container">
//     <h2 className="mt-3">Product Order</h2>
//     <p>qty: {qty}</p>
//     <button variant="danger" onClick={decreaseqty}>-</button>{' '}
//     <button variant="success" onClick={increaseqty}>+</button>{' '}
//     <button variant="primary" onClick={()=>placeOrder({qty})}>Place Order</button>
//   </div>
//   );
// }

// export default AdminOrders;