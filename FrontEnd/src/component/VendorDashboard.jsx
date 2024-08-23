


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';

// const VendorDashboard = () => {
//   const [vendors, setVendors] = useState([]);
//   const [activeSection, setActiveSection] = useState('products');
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === '/vendordashboard') {
//       setActiveSection('products');
//     } else if (location.pathname === '/profile') {
//       setActiveSection('profile');
//     } else if (location.pathname === '/managecategory') {
//       setActiveSection('categories');
//     }
//   }, [location]);

//   useEffect(() => {
//     if (activeSection === 'products') {
//       fetch('http://your-api-url.com/api/allvendors')  // Updated endpoint
//         .then(response => response.json())
//         .then(data => setVendors(data))
//         .catch(error => console.error('Error fetching vendors:', error));
//     }
//   }, [activeSection]);

//   const handleUpdateVendor = (vendorId) => {
//     navigate('/vendors/update/${vendorId}');
//   };

//   const handleDeleteVendor = (vendorId) => {
//     fetch(`http://your-api-url.com/api/vendors/${vendorId}`, {  // Update endpoint for deletion
//       method: 'DELETE'
//     })
//       .then(() => setVendors(vendors.filter(vendor => vendor.id !== vendorId)))
//       .catch(error => console.error('Error deleting vendor:', error));
//   };

//   const handleVendorAdded = (newVendor) => {
//     setVendors([...vendors, newVendor]);
//   };

//   const handleLogout = () => {
//     // Perform any necessary logout operations here
//     navigate('/login');
//   };

//   const renderProducts = () => (
//     <div>
//       <h1 className="fade-in">Manage Products</h1>
//       <div style={styles.buttonContainer}>
//         <Link to="/products">
//           <button style={styles.button} className="button-fade">Add Product</button>
//         </Link>
//         <Link to="/allproducts">
//           <button style={styles.button} className="button-fade">All Products</button>
//         </Link>
//       </div>
//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th style={styles.th}>ID</th>
//             <th style={styles.th}>Name</th>
//             <th style={styles.th}>Description</th>
//             <th style={styles.th}>Category</th>
//             <th style={styles.th}>Image</th>
//             <th style={styles.th}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vendors.map(vendor => (
//             <tr key={vendor.id}>
//               <td style={styles.td}>{vendor.id}</td>
//               <td style={styles.td}>{vendor.name}</td>
//               <td style={styles.td}>{vendor.description}</td>
//               <td style={styles.td}>{vendor.category}</td>
//               <td style={styles.td}>
//                 <img src={vendor.image} alt={vendor.name} style={styles.image} />
//               </td>
//               <td style={styles.td}>
//                 <button style={styles.button} onClick={() => handleUpdateVendor(vendor.id)}>Update</button>
//                 <button style={styles.button} onClick={() => handleDeleteVendor(vendor.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderProfile = () => (
//     <div>
//       <h1 className="fade-in">Manage Profile</h1>
//       {/* Add profile management content here */}
//     </div>
//   );

//   const renderCategories = () => (
//     <div>
//       <h1 className="fade-in">Manage Categories</h1>
//       {/* Add categories management content here */}
//     </div>
//   );

//   return (
//     <div style={styles.container}>
//       <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
//       <div style={styles.sidebar}>
//         <h2 style={styles.sidebarHeading}>Vendor Dashboard</h2>
//         <ul style={styles.sidebarList}>
//           <li style={styles.sidebarItem}>
//             <Link to="/vendordashboard" style={styles.link} className={activeSection === 'products' ? 'active' : ''}>Manage Products</Link>
//           </li>
//           <li style={styles.sidebarItem}>
//             <Link to="/vendorprofile" style={styles.link} className={activeSection === 'profile' ? 'active' : ''}>Manage Profile</Link>
//           </li>
//           <li style={styles.sidebarItem}>
//             <Link to="/managecategory" style={styles.link} className={activeSection === 'categories' ? 'active' : ''}>Manage Categories</Link>
//           </li>
//         </ul>
//       </div>
//       <div style={styles.mainContent}>
//         {activeSection === 'products' && renderProducts()}
//         {activeSection === 'profile' && renderProfile()}
//         {activeSection === 'categories' && renderCategories()}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     padding: '20px',
//     backgroundColor: '#f0f4f8', // Lighter background color
//     position: 'relative',
//   },
//   sidebar: {
//     width: '250px',
//     backgroundColor: '#ffffff',
//     padding: '15px',
//     borderRadius: '8px',
//     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//     position: 'fixed',
//     height: '100vh',
//     top: 0,
//     left: 0,
//   },
//   sidebarHeading: {
//     fontSize: '1.5rem',
//     marginBottom: '15px',
//     color: '#333',
//   },
//   sidebarList: {
//     listStyle: 'none',
//     padding: '0',
//   },
//   sidebarItem: {
//     marginBottom: '10px',
//   },
//   link: {
//     textDecoration: 'none',
//     color: '#333',
//     fontSize: '1rem',
//     padding: '10px',
//     borderRadius: '5px',
//     transition: 'background-color 0.3s ease',
//     display: 'block',
//   },
//   mainContent: {
//     flex: 1,
//     marginLeft: '270px', // Adjust to account for fixed sidebar
//     padding: '20px',
//     backgroundColor: '#ffffff',
//     borderRadius: '8px',
//     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   buttonContainer: {
//     marginBottom: '20px',
//     display: 'flex',
//     gap: '10px',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '1rem',
//     backgroundColor: '#4CAF50',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     tableLayout: 'fixed',
//   },
//   th: {
//     borderBottom: '2px solid #ddd',
//     padding: '12px',
//     backgroundColor: '#f9f9f9',
//     textAlign: 'left',
//     color: '#333',
//   },
//   td: {
//     borderBottom: '1px solid #ddd',
//     padding: '12px',
//     textAlign: 'left',
//     color: '#555',
//   },
//   image: {
//     width: '50px',
//     height: '50px',
//     objectFit: 'cover',
//     borderRadius: '4px',
//   },
//   logoutButton: {
//     position: 'absolute',
//     top: '20px',
//     right: '20px',
//     padding: '10px 20px',
//     fontSize: '1rem',
//     backgroundColor: '#f44336', // Red color for logout
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//     zIndex: 1000, // Ensure it stays on top of other content
//   },
// };

// export default VendorDashboard



// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';

// const VendorDashboard = () => {
//   const [vendors, setVendors] = useState([]);
//   const [activeSection, setActiveSection] = useState('products');
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === '/vendordashboard') {
//       setActiveSection('products');
//     } else if (location.pathname === '/profile') {
//       setActiveSection('profile');
//     } else if (location.pathname === '/managecategory') {
//       setActiveSection('categories');
//     }
//   }, [location]);

//   useEffect(() => {
//     if (activeSection === 'products') {
//       fetch('http://localhost:8080/allvendors')  // Updated endpoint
//         .then(response => response.json())
//         .then(data => setVendors(data))
//         .catch(error => console.error('Error fetching vendors:', error));
//     }
//   }, [activeSection]);

//   const handleUpdateVendor = (vendorId) => {
//     navigate('/vendors/update/${vendorId}');
//   };

//   const handleDeleteVendor = (vendorId) => {
//     fetch(`http://localhost:8080/vendors/${vendorId}`, {  // Update endpoint for deletion
//       method: 'DELETE'
//     })
//       .then(() => setVendors(vendors.filter(vendor => vendor.id !== vendorId)))
//       .catch(error => console.error('Error deleting vendor:', error));
//   };

//   const handleVendorAdded = (newVendor) => {
//     setVendors([...vendors, newVendor]);
//   };

//   const handleLogout = () => {
//     // Perform any necessary logout operations here
//     navigate('/login');
//   };

//   const renderProducts = () => (
//     <div>
//       <h1 className="fade-in">Manage Products</h1>
//       <div style={styles.buttonContainer}>
//         <Link to="/products">
//           <button style={styles.button} className="button-fade">Add Product</button>
//         </Link>
//         <Link to="/allproducts">
//           <button style={styles.button} className="button-fade">All Products</button>
//         </Link>
//       </div>
      
//     </div>
//   );

//   const renderProfile = () => (
//     <div>
//       <h1 className="fade-in">Manage Profile</h1>
//       {/* Add profile management content here */}
//     </div>
//   );

//   const renderCategories = () => (
//     <div>
//       <h1 className="fade-in">Manage Categories</h1>
//       {/* Add categories management content here */}
//     </div>
//   );

//   return (
//     <div style={styles.container}>
//       <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
//       <div style={styles.sidebar}>
//         <h2 style={styles.sidebarHeading}>Vendor Dashboard</h2>
//         <ul style={styles.sidebarList}>
//           <li style={styles.sidebarItem}>
//             <Link to="/vendordashboard" style={styles.link} className={activeSection === 'products' ? 'active' : ''}>Manage Products</Link>
//           </li>
//           <li style={styles.sidebarItem}>
//             <Link to="/vendorprofile" style={styles.link} className={activeSection === 'profile' ? 'active' : ''}>Manage Profile</Link>
//           </li>
//           <li style={styles.sidebarItem}>
//             <Link to="/managecategory" style={styles.link} className={activeSection === 'categories' ? 'active' : ''}>Manage Categories</Link>
//           </li>
//         </ul>
//       </div>
//       <div style={styles.mainContent}>
//         {activeSection === 'products' && renderProducts()}
//         {activeSection === 'profile' && renderProfile()}
//         {activeSection === 'categories' && renderCategories()}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     padding: '20px',
//     backgroundColor: '#f0f4f8', // Lighter background color
//     position: 'relative',
//   },
//   sidebar: {
//     width: '250px',
//     backgroundColor: '#ffffff',
//     padding: '15px',
//     borderRadius: '8px',
//     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//     position: 'fixed',
//     height: '100vh',
//     top: 0,
//     left: 0,
//   },
//   sidebarHeading: {
//     fontSize: '1.5rem',
//     marginBottom: '15px',
//     color: '#333',
//   },
//   sidebarList: {
//     listStyle: 'none',
//     padding: '0',
//   },
//   sidebarItem: {
//     marginBottom: '10px',
//   },
//   link: {
//     textDecoration: 'none',
//     color: '#333',
//     fontSize: '1.5rem',
//     padding: '10px',
//     borderRadius: '5px',
//     transition: 'background-color 0.3s ease',
//     display: 'block',
//   },
//   mainContent: {
//     flex: 1,
//     marginLeft: '270px', // Adjust to account for fixed sidebar
//     padding: '20px',
//     backgroundColor: '#ffffff',
//     borderRadius: '8px',
//     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   buttonContainer: {
//     marginBottom: '20px',
//     display: 'flex',
//     gap: '10px',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '1.5rem',
//     backgroundColor: '#4CAF50',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     tableLayout: 'fixed',
//   },
//   th: {
//     borderBottom: '2px solid #ddd',
//     padding: '12px',
//     backgroundColor: '#f9f9f9',
//     textAlign: 'left',
//     color: '#333',
//   },
//   td: {
//     borderBottom: '1px solid #ddd',
//     padding: '12px',
//     textAlign: 'left',
//     color: '#555',
//   },
//   image: {
//     width: '50px',
//     height: '50px',
//     objectFit: 'cover',
//     borderRadius: '4px',
//   },
//   logoutButton: {
//     position: 'absolute',
//     top: '20px',
//     right: '20px',
//     padding: '10px 20px',
//     fontSize: '1.5rem',
//     backgroundColor: '#f44336', // Red color for logout
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//     zIndex: 1000, // Ensure it stays on top of other content
//   },
// };

// export default VendorDashboard;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// Import CSS for transitions
import './VendorDashboard.css'; // Add this file for specific vendor dashboard styles

const VendorDashboard = () => {
  const [vendors, setVendors] = useState([]);
  const [activeSection, setActiveSection] = useState('products');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/vendordashboard') {
      setActiveSection('products');
    } else if (location.pathname === '/vendorprofile') {
      setActiveSection('profile');
    } else if (location.pathname === '/managecategory') {
      setActiveSection('categories');
    }
  }, [location]);

  useEffect(() => {
    if (activeSection === 'products') {
      fetch('http://your-api-url.com/api/allvendors') // Updated endpoint
        .then(response => response.json())
        .then(data => setVendors(data))
        .catch(error => console.error('Error fetching vendors:', error));
    }
  }, [activeSection]);

  const handleUpdateVendor = (vendorId) => {
    navigate('/vendors/update/${vendorId}');
  };

  const handleDeleteVendor = (vendorId) => {
    fetch(`http://your-api-url.com/api/vendors/${vendorId}`, { // Updated endpoint
      method: 'DELETE'
    })
      .then(() => setVendors(vendors.filter(vendor => vendor.id !== vendorId)))
      .catch(error => console.error('Error deleting vendor:', error));
  };

  const handleLogout = () => {
    // Perform any necessary logout operations here
    navigate('/');
  };

  const renderProducts = () => (
    <div>
      <h1 className="fade-in"><center>Welcome Vendor</center></h1>
      <br></br>
      <div style={styles.buttonContainer}>
        <Link to="/products">
          <button style={styles.button} className="button-fade">Add Product</button>
        </Link>
        <Link to="/allproducts">
          <button style={styles.button} className="button-fade">All Products</button>
        </Link>
        <Link to="/managecategory">
          <button style={styles.button} className="button-fade">Manage Category</button>
        </Link>
        <Link to="/vendorprofile">
          <button style={styles.button} className="button-fade">Manage Profile</button>
        </Link>
        
      </div>
      
    </div>
  );

  const renderProfile = () => (
    <div>
      <h1 className="fade-in">Manage Profile</h1>
      {/* Add profile management content here */}
    </div>
  );

  const renderCategories = () => (
    <div>
      <h1 className="fade-in">Manage Categories</h1>
      {/* Add categories management content here */}
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.logoutContainer}>
        <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
      </div>
      <div style={styles.buttonContainer}>
        {activeSection === 'products' && renderProducts()}
        {activeSection === 'profile' && renderProfile()}
        {activeSection === 'categories' && renderCategories()}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#ffe4e1', // Light background color
    padding: '20px',
    position: 'relative',
  },
  logoutContainer: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  logoutButton: {
    padding: '10px 20px',
    fontSize: '1.5rem',
    backgroundColor: '#f44336', // Red background color for logout button
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '40px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '40px', // Margin to space out from table
  },
  button: {
    padding: '15px 30px',
    fontSize: '1.5rem',
    backgroundColor: '#4CAF50', // Green background color
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    tableLayout: 'fixed',
  },
  th: {
    borderBottom: '2px solid #ddd',
    padding: '12px',
    backgroundColor: '#f9f9f9',
    textAlign: 'left',
    color: '#333',
  },
  td: {
    borderBottom: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    color: '#555',
  },
  image: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
};

export default VendorDashboard;