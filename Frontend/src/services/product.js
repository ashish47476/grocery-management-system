import axios from 'axios'
import { createUrl, log } from '../utils/utils'

export async function getProductList() {
  // const url = createUrl('/product')
  const url = createUrl('/vendorProducts/listOfvp')

  try {
    const header = {
      headers: {
        // token,
      },
    }
      const response = await axios.get(url, header)
    log(response.data)
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function AddToCart(customerId,productId,qty){
  const url = createUrl('/carts')
  const body = {
    customerId,
    productId,
    qty
  }

  try{
    const response = await axios.post(url,body)
    console.log(response)
    return response
  } catch(ex){
    console.log(ex)
    return null
  }
}

export async function placeOrderForAdmin(vendorProductId, qty)  
{
  const url= createUrl('/products/'+vendorProductId)

  console.log(qty)
  const body = {qty}

  try {
    const response = await axios.put(url, body)
    log("in log............"+response.data)

  } catch (error) {
    log(error)
  }
}


export async function getInventoryProduct() {
 
  const url = createUrl('/products')

  try {
    

    const config = {
      headers: {
       'authorization' : 'Bearer '+sessionStorage.getItem('token')
      }
    }
      const response = await axios.get(url,config)
    log(response.data)
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function getPurchasedProductsByCustomer()  
{
  const url= createUrl('/orderDetailscontroller/totalQtySelled')


  try {
    const header = {
      headers: {
        // token,
      },
    }
    const response = await axios.get(url, header)
    log("in getPurchasedProductsByCustomer............"+response.data)
    log(response.data)
    return response
  } catch (error) {
    log(error)
  }
}














// import axios from 'axios'
// import { createUrl, log } from '../utils/utils'

// export async function getProductList() {
//   // const url = createUrl('/product')
//   const url = createUrl('/products')

//   try {
//     //// get the current user's token from session storage
//    // const { token } = sessionStorage

//    // create a header to send the token
//     const header = {
//       headers: {
//         // token,
//       },
//     }

//   //  // make the api call using the token in the header
//     // const response = await axios.get(url, header)
//       const response = await axios.get(url, header)
//     log(response.data)
//     // return response.data
//     return response
//   } catch (ex) {
//     log(ex)
//     return null
//   }
// }
















// import axios from 'axios'
// import { createUrl, log } from '../utils/utils'

// export async function getProductList() {
//   // const url = createUrl('/product')
//   const url = createUrl('/vendorProducts/listOfvp')

//   try {
//     //// get the current user's token from session storage
//    // const { token } = sessionStorage

//    // create a header to send the token
//     const header = {
//       headers: {
//         // token,
//       },
//     }

//   //  // make the api call using the token in the header
//     // const response = await axios.get(url, header)
//       const response = await axios.get(url, header)
//     log(response.data)
//     // return response.data
//     return response
//   } catch (ex) {
//     log(ex)
//     return null
//   }
// }

















// import axios from 'axios'
// import { createUrl, log } from '../utils/utils'

// export async function getProductList() {
//   // const url = createUrl('/product')
//   const url = createUrl('/products')

//   try {
//     //// get the current user's token from session storage
//    // const { token } = sessionStorage

//    // create a header to send the token
//     const header = {
//       headers: {
//         // token,
//       },
//     }

//   //  // make the api call using the token in the header
//     // const response = await axios.get(url, header)
//       const response = await axios.get(url, header)
//     log(response.data)
//     // return response.data
//     return response
//   } catch (ex) {
//     log(ex)
//     return null
//   }
// }
