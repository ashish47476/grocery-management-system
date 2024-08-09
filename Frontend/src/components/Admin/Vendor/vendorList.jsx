import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getVendorList } from "../../../services/vendor";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"; // Import styled-components
import "../../../styles.css";

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
    border-radius: 5px;
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

function VendorList() {
    const [vendors, setVendors] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Get the list of vendors from server
        loadVendors();
    }, []);

    const loadVendors = async () => {
        const response = await getVendorList();
        if (response) {
            console.log(response);
            setVendors(response['data']);
        } else {
            toast.error('Error while calling get /vendor api');
        }
    };

    const navigateToVendorDetails = (vendorId) => {
        console.log(vendorId);
        sessionStorage.setItem('vId', vendorId);
        navigate(`/vendorProductList/${vendorId}`);
    };

    const addVendor = () => {
        navigate('/addNewVendor');
    };

    const handleLogout = () => {
        // Clear user data (assuming it's stored in local storage or session storage)
        sessionStorage.clear();
        localStorage.clear();
        navigate('/'); // Redirect to login page
    };

    return (
        <>
            <div className="background-container">
                <h1 style={{ textAlign: 'center', margin: 10, color: '#333' }}>Vendor List</h1>
                <StyledVendorList>
                    <div className='row' style={{ marginTop: 10 }}>
                        <div className="container">
                            <button onClick={addVendor} className='custom-button'>
                                Add Vendor
                            </button>
                            <br />
                            <br />
                            <table className="table table-striped table-bordered table-hover table-responsive">
                                <thead>
                                    <tr>
                                        <th>VendorID</th>
                                        <th>Email</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Mobile</th>
                                        <th>Password</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vendors.map((vendor) => (
                                        <tr key={vendor.vendorId}>
                                            <td>{vendor.vendorId}</td>
                                            <td>{vendor.email}</td>
                                            <td>{vendor.fname}</td>
                                            <td>{vendor.lname}</td>
                                            <td>{vendor.mobile}</td>
                                            <td>{vendor.password}</td>
                                            <td>
                                                <button
                                                    className="btn btn-secondary"
                                                    onClick={() => navigateToVendorDetails(vendor.vendorId)}
                                                >
                                                    View Products
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
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

export default VendorList;
