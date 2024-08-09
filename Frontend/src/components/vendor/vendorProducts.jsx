import { useEffect, useState } from "react";
import { getVendorProductListByVendorId } from "../../services/vendor";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components"; // Import styled-components
import "../../styles.css";

const StyledVendorList = styled.div`
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

    td {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

function VendorProducts() {
    const [vproducts, setVproducts] = useState([]);
    const { vendorId } = useParams();
    const navigate = useNavigate();

    sessionStorage['vendorId'] = vendorId;

    useEffect(() => {
        // Get the list of products
        loadVproducts();
    }, []);

    const loadVproducts = async () => {
        const response = await getVendorProductListByVendorId(vendorId);
        if (response) {
            console.log("getVendorProductListByVendorId's response", response);
            setVproducts(response['data']);
        } else {
            console.log("Error while calling get /product api");
        }
    };

    const GotoProdEditPage = (vendorProductId) => {
        navigate(`/updateProduct/${vendorProductId}`);
    };

    const handleLogout = () => {
        // Clear user data (assuming it's stored in local storage or session storage)
        sessionStorage.clear();
        localStorage.clear();
        navigate('/vendorlogin'); // Redirect to login page
    };

    return (
        <>
            <div className="background-container">
                <h1 style={{ textAlign: 'center', margin: 10, color: '#333' }}>Vendor Products</h1>
                <StyledVendorList>
                    <div>
                        <button className="custom-button">
                            <Link to='/addProduct'>Add Product</Link>
                        </button>
                    </div>
                    <br />
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Product Name</th>
                                <th>Product Description</th>
                                <th>Product Mfg Date</th>
                                <th>Product Exp Date</th>
                                <th>Product Price</th>
                                <th>Product Quantity</th>
                                <th>Manufacturer</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vproducts.map((vproduct) => (
                                <tr key={vproduct.vendorProductId}>
                                    <td><button className="custom-button" onClick={() => GotoProdEditPage(vproduct.vendorProductId)}>{vproduct.vendorProductId}</button></td>
                                    <td>{vproduct.productName}</td>
                                    <td>{vproduct.productDesc}</td>
                                    <td>{vproduct.productMfgDate}</td>
                                    <td>{vproduct.productExpDate}</td>
                                    <td>{vproduct.productPrice}</td>
                                    <td>{vproduct.productQuantity}</td>
                                    <td>{vproduct.pmanufacturer}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </StyledVendorList>
            </div>
            <nav className='navbar navbar-expand-sm bg-success navbar-dark sticky-top'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button onClick={handleLogout} className='btn btn-danger'>
                            Logout
                        </button>
                    </div>
                    <div style={{ textAlign: 'center', flex: 1 }}>
                        GroceryBuddy. ©2024. All Rights Reserved
                    </div>
                </div>
            </nav>
        </>
    );
}

export default VendorProducts;
