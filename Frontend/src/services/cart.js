import axios from 'axios'
import { createUrl, log } from '../utils/utils'



export async function getCartList(userId)
{
    const url= createUrl('/carts/'+userId)

    console.log(userId)

    try { 

      const config = {
        headers: {
         'authorization' : 'Bearer '+sessionStorage.getItem('token')
        }
      }
        
      const response = await axios.get(url,config)
        log("in log............"+response.data)
        return response
    
      } catch (error) {
        log(error)
        return null
      }     
}

export async function UpdateCart(customerId,qty,productId)
{
    const url= createUrl(`/carts`)
    console.log(customerId)
    try { 
      const body = {
        customerId,
        qty,
        productId
      }
      log("body----")
      log(body)

        const response = await axios.post(url,body)
        log("in log............"+response.data)
        return response
      } catch (error) {
        log(error)
        return null
      }
    }


// export async function removeCart(customerId,qty,productId)
// {
//     const url= createUrl(`/carts`)
//     console.log(customerId)
//     try { 
//       const body = {
//         customerId,
//         qty,
//         productId
//       }
//       log("body----")
//       log(body)

//         const response = await axios.post(url,body)
//         log("in log............"+response.data)
//         return response
//       } catch (error) {
//         log(error)
//         return null
//       }
//     }


    export async function removeProductFromCart(cartId)
{
  const url= createUrl('/carts/'+cartId)
  console.log(cartId)
  try { 
      const response = await axios.delete(url)
      log("in log............"+response.data)
      return response
  
    } catch (error) {
      log(error)
      return null
    }
}


export async function giveOrder(odate,customerId,total)
{
    
  const url= createUrl('/ordercontroller')
  const body = {
    odate,
    customerId,
    total
  }
  try {     
      const response=await axios.post(url,body)
      log(response.data)
    } catch (error) {
      log(error)
    }
}

export async function cartQty(customerId)
{
  const url= createUrl('/carts/CartQty/'+customerId)
  try {     
      const response=await axios.get(url)
      log(response.data)
      return response
    } catch (error) {
      log(error)
    }
}