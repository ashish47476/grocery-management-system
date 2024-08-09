// import axios from 'axios'
// import { createUrl, log } from '../utils/utils'


import axios from 'axios'
import { createUrl, log } from '../utils/utils'





export async function adminLogin(email, password) {
  const url = createUrl('/Admin/login')
  const body = {
    email,
    password,
  }

  // wait till axios is making the api call and getting response from server
  try {
    debugger
    const response = await axios.post(url, body)
    debugger
    log(response.data)
    console.log( "in response vendorlogin "+response)
    console.log( response.data.email)
    // return response.data
    return response
  } catch (ex) {
    console.log("error occured")
    log(ex)
    return null
  }
}



export async function getOrderODdetails(){
    const url = createUrl('/orderDetailscontroller')

    try {
        const header = {
            headers: {
              //token,
            },
          }
          debugger
        // const response =await axios.get(url,header)
        const response = await axios.get(url, header) 

        debugger
        return response
    } catch (ex) {
        log(ex)
        return null
    }
}

export async function placeOrderForAdmin(vendorProductId, quantity,orderDate,vendorProductPrice)  
{
  //const url= createUrl('/products/'+vendorProductId)

  const url= createUrl('/adminorder/'+vendorProductId)

  console.log(quantity)

  const body = {quantity,orderDate,vendorProductPrice}

  try {
    const response = await axios.post(url, body)
    log("in log............"+response.data)
    return response;

  } catch (error) {
    log(error)
    return null;
  }
}


export async function getAllAdminOrders()  
{
  //const url= createUrl('/products/'+vendorProductId)

  const url= createUrl('/adminorder')

  

 

  try {
    const response = await axios.post(url)
    log("in log............"+response.data)
    return response;

  } catch (error) {
    log(error)
    return null;
  }
}
