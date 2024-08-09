import { useEffect, useState } from "react";
import { getOrderODdetails } from "../../../services/admin";
import { styled}  from "styled-components"
import "../../../styles.css"


function OrderDetails() {

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

    const [oDetails, setODetails] = useState([])

    useEffect(()=>{
        debugger
        callFun()
    },[])

    const callFun=async()=>{
        const response = await getOrderODdetails()
        debugger
        console.log('response in od----------')
        console.log(response.data)
        if(response){
            
            setODetails(response['data'])

        } else {
         
          console.log("Error while calling get api")
        }

    }


  return (
    <>
   <div className="background-container">
   <br/>
   <div><h4 style={{ textAlign: 'center', margin: 10,  color: '#333'}}>Customer Orders</h4></div>
   <br/>
   <StyledVendorList>
   <table className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
   {/* <table className="table table-striped"> */}
   <thead>
        <tr>
        {/* "odId": 1,
    "orderId": 1,
    "amount": 100,
    "productId": 1,
    "productName": "cheese slice",
    "categoryId": 1,
    "categoryName": "milk",
    "subCatId": 1,
    "subCatName": "cheese",
    "vendorId": 1,
    "customerId": 1,
    "quantity": 1,
    "vendorFname": "v1",
    "customerFname": "sanket" */}
            <th>OId</th>
            <th>Amount</th>
            <th>PId</th>
            <th>Product Name</th>
            {/* <th>Category</th> */}
            <th>SubCat</th>
            <th>Puchased Qty</th>
            <th>CustId</th>
            <th>CustName</th>
            <th>VId</th>
        </tr>
    </thead>
    <tbody>
      {oDetails.map((oDetail)=>{return (
      <tr>
        <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '12%' }}>{oDetail.orderId}</td>
        <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '12%' }}>{oDetail.amount}</td>
        <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '12%' }}>{oDetail.productId}</td>
        <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '12%' }}>{oDetail.productName}</td>
        <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '12%' }}>{oDetail.subCatName}</td>
        <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '12%' }}>{oDetail.quantity}</td>
        <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '12%' }}>{oDetail.customerId}</td>
        <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '12%' }}>{oDetail.customerFname}</td> 
        <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '12%' }}>{oDetail.vendorId}</td>  
      </tr>)})}
    </tbody>

   </table>
   </StyledVendorList>
   </div>
   <nav className='navbar navbar-expand-sm bg-success navbar-dark sticky-top' >
        <div>    </div>
         <div style={{ textAlign: 'center'}}>GroceryBuddy. ©2024. All Rights Reserved</div> 
</nav>
   </>
      ) ;
}

export default OrderDetails;