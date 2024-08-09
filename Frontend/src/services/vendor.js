import axios from "axios";
import { createUrl,log } from "../utils/utils";

export async function getVendorList() {
    const url = createUrl('/vendor')

    try {
        // get the current user's token from session storage
      //  const { token } = sessionStorage
        console.log("in getVendorList............")
        // create a header to send the token
        const header = {
          headers: {
            //token,
          },
        }

        const response = await axios.get(url, header)
        log(response.data)
        return response
}catch (ex){
    log(ex)
    return null
}
}

export async function registerVendor(fname,lname,email,password,mobile){
  const url = createUrl('/vendor')
  const body = {
    fname,
    lname,
    email,
    password,
    mobile,
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

export async function getVendorProductListByVendorId(id)
{
    console.log("in getVendorProductListByVendorId"+id)
    const url= createUrl('/vendorProducts/'+ id )

    try {
        console.log("in get VendorProductList By Vendor Id............")

        const header = {
            headers: {
              //token,
            },
          }

          const response = await axios.get(url, header)
          log("in log............"+response.data)
          log("in log............"+response)

          return response

    } catch (error) {
        
        log(error)
        return null
    }
}

export async function addVendorProducts(productName,productDesc,productMfgDate,productExpDate,
    productPrice,productQuantity,pmanufacturer,categoryId,vendorId,subCatId){
    const url = createUrl('/vendorProducts')
    try {
        const body ={
            productName,productDesc,productMfgDate,productExpDate,
                productPrice,productQuantity,pmanufacturer,categoryId,vendorId,subCatId
        }

        const response = await axios.post(url,body)
        return response
        
    } catch (error) {
        log(error)
        return null
    }
}

export async function getVenProdctById(productId){
    const url = createUrl('/vendorProducts/getProd/' +productId)

    try {
      const header = {
        headers:{
          //token
        },
      }
      const response = await axios.get(url,header)
      return response
      
    } catch (ex) {
        log(ex)
        return null;
    }
}

export async function updateVendorProduct(productId,productName,productDesc,productMfgDate,productExpDate,
  productPrice,productQuantity,pmanufacturer,categoryId,vendorId,subCatId){

    const url = createUrl('/vendorProducts/' + productId)
    const body = { productName,productDesc,productMfgDate,productExpDate,
      productPrice,productQuantity,pmanufacturer,categoryId,vendorId,subCatId}


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

  export async function vendorLogin(email, password) {
    const url = createUrl('/vendor/login')
    const body = {
      email,
      password
    }
  
    // wait till axios is making the api call and getting response from server
    try {
      
      const response = await axios.post(url, body)
      
      log(response.data)
      console.log( "in response vendorlogin "+response)
      console.log( response.data.email)
      // return response.data
      return response
    } catch (ex) {
      console.log("error occured  in ven.............")
      log(ex)
      return null
    }
  }
  

  export const deleteVendorProductById = async (vendorProductId) => {
    // Assume there's an API endpoint for deleting a product
    const response = await fetch(`/api/vendor/products/${vendorProductId}`, {
      method: 'DELETE',
    });
    return response.json();
  };
















// import axios from "axios";
// import { createUrl } from "../utils/utils";

// export async function getVendorById(vendorId){
//     const url = createUrl("/vendor/1")
//     try {
//         console.log("vendorId in get of vendor...."+ vendorId)
//         const header={
//             headers: {
//                 //token
//             },
//         }
//         const response= await axios.get(url,header)
//         return response;
//     } catch (ex) {
//         console.log(ex)
//         return null
        
//     }
// }