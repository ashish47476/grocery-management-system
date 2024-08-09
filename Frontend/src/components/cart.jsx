import { getCartList, removeProductFromCart, giveOrder, cartQty} from '../services/cart'
import { useEffect , useState } from "react"
import { toast } from "react-toastify"
import NavigationBar from './navigationBar'
import { useNavigate } from "react-router-dom"
import { log } from "../utils/utils"


function Cart() {

  const [rend,setRend]= useState(1)
  const [count, setCount] = useState();

  const [currentDate, setCurrentDate] = useState(new Date())

  const navigate=useNavigate()

  var cartTotal=0;
  var discount=0;
  useEffect(() => {
    // get the list of vendors from server
    loadQty(sessionStorage.getItem('userId'))
    loadCarts()
  }, [])

  useEffect(() => {
    loadCarts()
    
  }, [rend])

  const removeFromCart = async (cartId,productName) => {
    const response = await removeProductFromCart(cartId)
    setRend(rend+1)
    loadQty(sessionStorage.getItem('customerId'))
    toast.dark(productName+" removed ...",{
      style:{
        top: '80px'
      }
    })
  }

  const [carts,setCarts] = useState(null)


  const loadCarts = async ()=>{
    const response = await getCartList(sessionStorage.getItem('userId'))
    console.log(response)
    if(response){
      setCarts(response['data'])
    } else {
      toast.error('Error while calling get /vendor api')
    }

  }

  const loadQty = async (customerId) => {
    const response = await cartQty(customerId)
    if (response) {
      if(response.data.length==0){
        log("length is  0")
        setCount(0)  
      }
        setCount(response.data)
    log(count) 
    } else {
      toast.error('Error while calling get /qty api')
    }
  }

  const PlaceOrder = async(total) => {
    const formattedDate = currentDate.toISOString().split('T')[0];
    const id = sessionStorage.getItem('customerId');
    await giveOrder(formattedDate,id,total)
    setCarts([]);
  };

    return (     <>
{/* <NavigationBar counts={count}></NavigationBar> */}
        <section className="bg-light my-5"style={{ boxShadow: '11px 12px 13px 12px rgb(207, 207, 207)' }} >
          <div className="container">
            <div className="row">
        
              <div className="col-lg-9">
                <div className="card border shadow-0">
                  <div className="m-4">
                    <h4 className="card-title mb-4">Your shopping cart</h4>

                    {carts === null ? (
                    <p>Loading...</p> // Show loading indicator while data is being fetched
                  ) : carts.length > 0 ? (
                    carts.map((cart) => {
                      cartTotal=cartTotal+cart['totalAmount']
                      if (cart['productPrice'] >= 1000) {
                        // Increment the discount by 100
                        discount =discount+ 100;}
                      return (
                        // Your cart item rendering logic here
                        <div className="row gy-3 mb-4">
                      <div className="col-lg-5">
                        <div className="me-lg-5">
                          <div className="d-flex">
                            <img src={`http://localhost:9999/vendorProducts/images/${cart.vendorProductId}`} alt="..." className="border rounded me-3" style={{height:96,width:96}}  onClick={() => { navigate(`/product/${cart.productId}`) }}/>
                            <div className="">
                              <p style={{fontSize:20,fontFamily:"cursive"}}>{cart['productName']}</p>
                              <p>{cart.pmanufacturer}</p>

                              {/* <p className="text-muted">Yellow, Jeans</p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                      <div className="" style={{marginRight:150}}>
                          <text className="h6">Quanity: {cart['qty']}</text> <br />
                          
                        </div>
                        {/* <div className="">
                          <select style={{width:100}} className="form-select me-4">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div> */}
                        <div className="">
                          <text className="h6">Total: {cart['totalAmount']}</text> <br />
                         
                          <small className="text-muted text-nowrap"> {cart['productPrice']} / per item </small>
                        </div>
                      </div>
                      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                        <div className="float-md-end">
                          {/* <a href="#" className="btn btn-light border text-danger icon-hover-danger"> Remove</a> */}
                          
                          <button type="button" class="btn btn-danger" onClick={()=>{removeFromCart(cart.cartId,cart.productName)}}>Remove</button>
                          
                        </div>
                      </div>
                    </div>
                      );
                    })
                  ) : (
                    <p>Your cart is empty.</p>
                  )}             
                    
                    
                  </div>
        
                 
                </div>
              </div>
              
              
              <div className="col-lg-3">
                
                <div className="card shadow-0 border">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Total price:</p>
                      <p className="mb-2">{cartTotal}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Discount:</p>
                      <p className="mb-2 text-success">-{discount}</p>
                    </div>
                   
                    <hr />
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Total price:</p>
                      <p className="mb-2 fw-bold">{cartTotal-discount}</p>
                    </div>
        
                    <div className="mt-3">
                      <button className="btn btn-success w-100 shadow-0 mb-2" onClick={()=>PlaceOrder(cartTotal)}> Place Order </button>
                      <a href="http://localhost:3000/product-gallery" className="btn btn-light w-100 border mt-2"> Back to store </a>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>  
        <nav className='navbar navbar-expand-sm bg-success navbar-dark sticky-top' >
        <div>    </div>
         <div style={{ textAlign: 'center'}}>GroceryBuddy. ©2023. All Rights Reserved</div> 
</nav>
        </>
        
          ) ;
}

export default Cart;
















// import { useState } from "react";

// function Cart() {

//   const [orderPrice, setOrderPrice] = useState('');
//   const [customerId, setCustomerId] = useState('');






//   return (
//   <>
//     <section className="bg-light my-5">
//       <div className="container">
//         <div className="row">

//           <div className="col-lg-9">
//             <div className="card border shadow-0">
//               <div className="m-4">
//                 <h4 className="card-title mb-4">Your shopping cart</h4>
//                 <div className="row gy-3 mb-4">
//                   <div className="col-lg-5">
//                     <div className="me-lg-5">
//                       <div className="d-flex">
//                         <img src="" alt="..." className="border rounded me-3" style={{height:96,width:96}} />
//                         <div className="">
//                           <a href="#" className="nav-link">Amul Milk</a>
//                           {/* <p className="text-muted">Yellow, Jeans</p> */}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-lg-2 col-sm-6 col-6 d-flex flex-ro  w flex-lg-column flex-xl-row text-nowrap">
//                     <div className="">
//                       <select style={{width:100}} className="form-select me-4">
//                         <option>1</option>
//                         <option>2</option>
//                         <option>3</option>
//                         <option>4</option>
//                       </select>
//                     </div>
//                     <div className="">
//                       <text className="h6">₹60.00</text> <br />
//                       <small className="text-muted text-nowrap"> ₹60.00 / per item </small>
//                     </div>
//                   </div>
//                   <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
//                     <div className="float-md-end">
//                       <a href="#!" className="btn btn-light border px-2 icon-hover-primary"><i className="fas fa-heart fa-lg px-1 text-secondary"></i></a>
//                       <a href="#" className="btn btn-light border text-danger icon-hover-danger"> Remove</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

            
//             </div>
//           </div>
          
          
//           <div className="col-lg-3">
            
//             <div className="card shadow-0 border">
//               <div className="card-body">
//                 <div className="d-flex justify-content-between">
//                   <p className="mb-2">Total price:</p>
//                   <p className="mb-2">₹60.00</p>
//                 </div>
//                 <div className="d-flex justify-content-between">
//                   <p className="mb-2">Discount:</p>
//                   <p className="mb-2 text-success">-₹60.00</p>
//                 </div>
              
//                 <hr />
//                 <div className="d-flex justify-content-between">
//                   <p className="mb-2">Total price:</p>
//                   <p className="mb-2 fw-bold">₹60.00</p>
//                 </div>

//                 <div className="mt-3">
//                   <a href="#" className="btn btn-success w-100 shadow-0 mb-2" > Place Order </a>
//                   <a href="#" className="btn btn-light w-100 border mt-2"> Back to store </a>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </section>





//     </>

//       ) ;
// }

// export default Cart;


// // function Cart() {
// //   return (
// //     // <div>
// //       {/* <h1 style={{ textAlign: 'center', margin: 10 }}>Cart</h1>
// //       <div className='row' style={{ marginTop: 50 }}>
// //         {cartItems.map((item, index) => (
// //           <div className='col-md-3' key={index}>
// //             <div className='card'>
// //               <img
// //                 src={constants.serverUrl + '/' + item['image']}
// //                 style={{ height: 200 }}
// //                 alt=''
// //               />
// //               <div className='card-body'>
// //                 {/* <h5 className='card-productId'>{item['vendorProductId']}</h5>
// //                 <h5 className='card-productName'>{item['productName']}</h5> */}
// //                    <h5 className='card-productId'></h5>
// //                   <h5 className='card-productName'></h5>
// //                 <div className='card-text'>
// //                   <div>productDesc</div>
// //                   <div>₹ productPrice</div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div> */}
// //   )
// // }

// // export default Cart
