import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { getProductList, AddToCart, getInventoryProduct} from '../services/product'
import { constants } from '../utils/constants'
import { Link ,useParams} from 'react-router-dom'
import { UpdateCart } from '../services/cart' 
import MyCarousel from './Customer/carousel'
import NavigationBar from './navigationBar'
// import Button from 'react-bootstrap/Button'


function ProductGallery() {
  const [products, setProducts] = useState([])
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');



  useEffect(() => {
  //  // get the list of products from server
    loadProducts()
  }, [])

  const loadProducts = async () => {
    // const response = await getProductList();
    const response = await getInventoryProduct();

    if (response) {
      const productsWithQuantity = response['data'].map(product => ({
        ...product,
        qty: 0 // Initialize quantity to 0 for each product
      }));
      setProducts(productsWithQuantity);
    } else {
      toast.error('Error while calling get /product api');
    }
  };

  const filteredProducts = isSearching
    ? products.filter(product => 
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  const customerId = sessionStorage.getItem('customerId')
  const GoToCart = async (productId,qty)=>{
    
    console.log(productId)
    console.log(qty)
    // const response = await AddToCart(customerId,productId,qty)
    const response = await UpdateCart(customerId,productId,qty)

    if(response){
      toast.success("Added to Cart")
    }

  }

  const increaseqty = (productId) => {
    const updatedProducts = products.map(product => {
      if (product.productId === productId) {
        return {
          ...product,
          qty: product.qty + 1
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

 
const decreaseqty = (productId) => {
  const updatedProducts = products.map(product => {
    if (product.productId === productId && product.qty > 0) {
      return {
        ...product,
        qty: product.qty - 1
      };
    }
    return product;
  });
  setProducts(updatedProducts);
};

  return (
    
    
    <div>
      <NavigationBar></NavigationBar> 
      <br/>
      <MyCarousel></MyCarousel>
      <br/>
      {/* <h1 style={{ textAlign: 'center', margin: 10 }}>Product Gallery</h1> */}
      <div className='mb-3'>
              {/* <div className='mb-3'>
                Update an account <Link to='/updateCustomer'>Update here</Link>
              </div> */}
              <div style={{ marginLeft:1260}}>
                  <input
                    type="text"
                    placeholder="Search products"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setIsSearching(e.target.value !== '');
                    }}
                  />
              </div>
              
            </div>
      <div className='row' style={{ marginTop: 50 }}>
        { 
              filteredProducts.map((product) => {
              return (
                <div className='col-md-3'>
                  <div className='card'>
                    <img
                      src={constants.serverUrl + '/vendorProducts/images/' + product['vendorProductId']}
                      style={{ height: 200 }}
                      alt=''
                    />
                    <div className='card-body'>
                    <h5 className='card-productId'>{product['productId']}</h5>
                      <h5 className='card-productName'>{product['productName']}</h5>
                      <div className='card-text'>
                        {/* <div>{product['productDesc']}</div> */}
                        <div>₹ {product['productPrice']}</div>
                        <button className='btn btn-primary' onClick={()=>GoToCart(product['productId'],product['qty'])}>Add To Cart</button>
                        
                      </div>
                      <br></br>
                    <div style={{display:"flex"}}>
                        <div>
                             <button variant="danger" onClick={() => decreaseqty(product.productId)}>-</button>{' '}
                        </div>
                        <div>
                            <p>qty:{product['qty']}</p>
                        </div>
                        <div>
                            <button variant="success" onClick={() => increaseqty(product.productId)}>+</button>{' '}
                        </div>
                      
                      </div>
                    </div>
                    {/* <div className='card-body'>
                    <h5 className='card-productId'>{product['productId']}</h5>
                      <h5 className='card-productName'>{product['productName']}</h5>
                      <div className='card-text'>
                        <div>{product['productDesc']}</div>
                        <div>₹ {product['productPrice']}</div>
                      </div>
                    </div> */}
                  </div>
                </div>
              )
            })
          

        
        }
      </div>
    </div>
  )
}

export default ProductGallery








































// import { useEffect, useState } from 'react'
// import { toast } from 'react-toastify'
// import { getProductList, AddToCart} from '../services/product'
// import { constants } from '../utils/constants'
// import { Link } from 'react-router-dom'
// // import Button from 'react-bootstrap/Button'


// function ProductGallery() {
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//   //  // get the list of products from server
//     loadProducts()
//   }, [])

//   // const loadProducts = async () => {
//   //   const response = await getProductList()
//   //   // if (response['status'] === 'success') {
//   //     if (response) {

//   //       console.log("response in product gallery --loadProduct method  "+response)
//   //   setProducts(response['data'])
//   // //  debugger
//   //   console.log("products")
//   //   console.log(products)
//   //   } else {
//   //     toast.error('Error while calling get /product api')
//   //   }
//   // }

//   const loadProducts = async () => {
//     const response = await getProductList();
//     if (response) {
//       const productsWithQuantity = response['data'].map(product => ({
//         ...product,
//         qty: 0 // Initialize quantity to 0 for each product
//       }));
//       setProducts(productsWithQuantity);
//     } else {
//       toast.error('Error while calling get /product api');
//     }
//   };

//   const customerId = sessionStorage.getItem('customerId')
//   const GoToCart = async (productId,qty)=>{
    
//     console.log(productId)
//     console.log(qty)
//     const response = await AddToCart(customerId,productId,qty)

//     if(response){
//       toast.success("Added to Cart")
//     }

//   }

//   const increaseqty = (productId) => {
//     const updatedProducts = products.map(product => {
//       if (product.productId === productId) {
//         return {
//           ...product,
//           qty: product.qty + 1
//         };
//       }
//       return product;
//     });
//     setProducts(updatedProducts);
//   };

 
// const decreaseqty = (productId) => {
//   const updatedProducts = products.map(product => {
//     if (product.productId === productId && product.qty > 0) {
//       return {
//         ...product,
//         qty: product.qty - 1
//       };
//     }
//     return product;
//   });
//   setProducts(updatedProducts);
// };

//   return (
//     <div>
//       <h1 style={{ textAlign: 'center', margin: 10 }}>Product Gallery</h1>
//       <div className='mb-3'>
//               <div className='mb-3'>
//                 Update an account <Link to='/updateCustomer'>Update here</Link>
//               </div>
              
//             </div>
//       <div className='row' style={{ marginTop: 50 }}>
//         {products.map((product) => {
//           return (
//             <div className='col-md-3'>
//               <div className='card'>
//                 <img
//                   src={constants.serverUrl + '/vendorProducts/images/' + product['productId']}
//                   style={{ height: 200 }}
//                   alt=''
//                 />
//                 <div className='card-body'>
//                 <h5 className='card-productId'>{product['productId']}</h5>
//                   <h5 className='card-productName'>{product['productName']}</h5>
//                   <div className='card-text'>
//                     <div>{product['productDesc']}</div>
//                     <div>₹ {product['productPrice']}</div>
//                     <button className='btn btn-primary' onClick={()=>GoToCart(product['productId'],product['qty'])}>Add To Cart</button>
                    
//                   </div>
//                 <div >
//                   <button variant="danger" onClick={() => decreaseqty(product.productId)}>-</button>{' '}
//                     <br></br>
//                     <p>qty:{product['qty']}</p>
//                     <button variant="success" onClick={() => increaseqty(product.productId)}>+</button>{' '}
//                   </div>
//                 </div>
//                 {/* <div className='card-body'>
//                 <h5 className='card-productId'>{product['productId']}</h5>
//                   <h5 className='card-productName'>{product['productName']}</h5>
//                   <div className='card-text'>
//                     <div>{product['productDesc']}</div>
//                     <div>₹ {product['productPrice']}</div>
//                   </div>
//                 </div> */}
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default ProductGallery
