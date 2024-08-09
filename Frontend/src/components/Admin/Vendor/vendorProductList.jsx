// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { getVendorProductListByVendorId } from '../../../services/vendor'

import { useNavigate, useParams } from 'react-router-dom'

import { useState, useEffect } from 'react'
import { styled}  from "styled-components"
import "../../../styles.css"



//import { useHistory } from 'react-router-dom';

function VendorProductList() {
//useParams: Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
const StyledVendorList = styled.div
`
  background-image: url("path_to_your_background_image.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px;

  h1 {
    text-align: center;
    margin: 10px 0;
    color: white;
  }

  .table {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    overflow: hidden;

    th {
      background-color: #1abc9c;
      color: white;
    }
  }
`
;  

const {vendorId} = useParams()
  console.log("in VendorProductList "+vendorId)
 
    const [products, setProducts] = useState([])
    
    //const [productQuantity, setProductQty] = useState('')
    //const history=useHistory();

    const navigate = useNavigate()

    const GotoNextPage=(vendorProductId,prodname,prodmanufacturer)=>{
        // console.log("You are about to book the movie : ");
        // console.log(movieDetails);
        sessionStorage.setItem('vendorProductId',vendorProductId);
        sessionStorage.setItem('prodname',prodname);
        sessionStorage.setItem('prodmanufacturer',prodmanufacturer);

         
         navigate('/adminOrders');
        
        
    }


    useEffect(() => {
      // get the list of products from server
      console.log("in component did mount")
      fetchDetailsOfVendorProducts()
    }, [])

    useEffect(() => {
      // get the list of products from server
      console.log("in component did update")
      // fetchDetailsOfVendorProducts()
    }, [products])

    //sessionStorage.getItem(vendorId'')
    const fetchDetailsOfVendorProducts = async () => {
      //const id = 2;
      const response = await getVendorProductListByVendorId(vendorId)
      //if (response['status'] === 'success') {
        if(response){
          console.log("getVendorProductListByVendorId ");
        //   console.log(response)
          
          setProducts(response['data'])
          console.log("this is response from backend"+response['data'])
          //setProducts(response.data)
          console.log("VendorProductResp-------------"+response)
  
      } else {
        // toast.error('Error while calling get /product api')
        console.log("Error while calling get /product api")
      }
    }

  

    
    //products = getVendorProductListByVendorId(id)
    return ( 
<>
     <div className="background-container">
     <br/>
         <h2 style={{ textAlign: 'center', color: 'black', fontSize: '24px', marginBottom: '20px' }}>
    List of Products
  </h2>
  <StyledVendorList>
    <table className="table table-bordered">
      <thead>
        <tr>

            {/* "vendorProductId": 3,
    "productName": "wnsdmcn",
    "productMfgDate": "2023-08-05",
    "productExpDate": "2023-08-19",
    "productPrice": 0,
    "productQuantity": 0,
    "pmanufacturer": "amul",
    "categoryId": 1,
    "subCatId": 1 */}
          <th>PId</th>
          <th>Product Name</th>
          <th>MfgDate</th>
          <th>ExpDate</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Manufacturer</th>
          <th>Cat ID</th>
          <th>Subcat ID</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return(
          <tr key={product.vendorProductId}>
            <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '10%' }}>{product.vendorProductId}</td>
            <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '10%' }}>{product.productName}</td>
            <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '10%' }}>{product.productMfgDate}</td>
            <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '10%' }}>{product.productExpDate}</td>
            <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '10%' }}>{product.productPrice}</td>
            <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '10%' }}>{product.productQuantity}</td>
            <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '10%' }}>{product.pmanufacturer}</td>
            <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '10%' }}>{product.categoryId}</td>
            <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '10%' }}>{product.subCatId}</td>
            <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '10%' }}>
              <button onClick={()=>GotoNextPage(product.vendorProductId,product.productName,product.pmanufacturer)} className='custom-button'>
                            Order
                        </button></td>
           
            
                      

          
          </tr>
        )})}
      </tbody>
    </table>
    </StyledVendorList>
    </div>
    <nav className='navbar navbar-expand-sm bg-success navbar-dark sticky-top' >
        <div>    </div>
         <div style={{ textAlign: 'center'}}>GroceryBuddy. ©2024. All Rights Reserved</div> 
</nav>
    </>
     );
}

export default VendorProductList;