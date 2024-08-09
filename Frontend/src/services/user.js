import axios from 'axios'
import { createUrl, log } from '../utils/utils'




//GET:get userById
export async function getCustomerById(customerId){
  // debugger
  const url =createUrl('/Customer/'+customerId)
  
  try{
    // get the current user's token from session storage
   //  const { token } = sessionStorage
   console.log("in GET of getCustomerById...."+ customerId)
   // create a header to send the token
    const header = {
      headers: {
        //token,
      },
    }
  //make api call using the token in the header
 const response = await axios.get(url, header) 
 console.log("response in get customerById.....")
  console.log(response)
  // debugger  
  return response;

  } catch (ex) {
    log(ex)
    return null
  }

}



export async function updateUser(customerId,firstName,lastName,email,password,phone)
{
  const url =createUrl('/Customer/'+customerId)
  console.log("url ....."+ url)
  const body ={customerId,firstName,lastName,email,password,phone}

  console.log("body====")
  console.log(body)

  try {
     // wait till axios is making the api call and getting response from server
    const response = await axios.put(url, body)
    log(response.data)
    console.log( "in response of update User "+response)

    // return response.data
    return response
  } catch (ex) {
    log(ex)
    return null
  }
  
}









export async function registerUser(
  firstName,
  lastName,
  email,
  password,
  phone
) {
  const url = createUrl('/Customer')
  const body = {
    firstName,
    lastName,
    email,
    password,
    phone,
  }

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response)

    console.log("in user for register ...")
    console.log(response)    
    // return response.data
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function loginUser(email, password) {
  const url = createUrl('/Customer/login')
  const body = {
    email,
    password,
  }

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response.data)
    console.log( "in response of loginUser "+response)
    console.log( response.data.email)
    // return response.data
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}
