import { useEffect , useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom'
import { getInventoryProduct } from "../../services/product"
import "../../styles.css"
import { styled}  from "styled-components" 

function Inventory() {

    const StyledVendorList = styled.div
`
  background-image: url("path_to_your_background_image.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 10px;

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
    const [inventory, setIventory] = useState([])

        const navigate = useNavigate()
        useEffect(() => {
          // get the list of vendors from server
          loadInventory()
        }, [])

    
        const loadInventory = async () => {
                  const response = await getInventoryProduct()
                //   if (response['status'] === 'success') {
                    console.log(response)
                    if(response){
                        setIventory(response['data'])
                    debugger;
                  } else {
                    toast.error('Error while calling get /products api')
                  }
                }


    return (  
        <>
                <div className="background-container3">
                    
                <h1 style={{ textAlign: 'center', margin: 10 }}>Inventory</h1>
                <div className='row' style={{ marginTop: 50 }}>
                    <div className="container">
                    <StyledVendorList>
                    <table className="table table-striped table-bordered table-hover table-responsive">
                        <thead>
                                <tr>
                                    <th>
                                         Product Id
                                    </th>
                                    <th>
                                    Vendor_Product Id
                                    </th>
                                    <th>
                                    Product Name 
                                    </th>
                                    <th>
                                    Product Mfg. Date
                                    </th>
                                    <th>
                                    Product Exp. Date
                                    </th>
                                    <th>
                                    Product Quantity
                                    </th>
                                    <th>Product Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                {inventory.map((prod) => {
                                     return (
                                        <tr>
                                         <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%' }}>
                                            {prod['productId']}
                                        </td>
                                        <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%' }}>
                                            {prod['vendorProductId']}
                                        </td>
                                        <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%' }}>
                                            {prod['productName']}
                                        </td>
                                        <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%' }}>
                                            {prod['productMfgDate']}
                                        </td>
                                        <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%' }}>
                                            {prod['productExpDate']}
                                        </td>
                                        <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '15%' }}>
                                            {prod['pq']}
                                        </td>
                                        <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '15%' }}>
                                            {prod['productPrice']}
                                        </td>
                                    </tr>
                                             )
                  })}
        
                                </tbody>
                            </table>
                            </StyledVendorList>
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

export default Inventory;