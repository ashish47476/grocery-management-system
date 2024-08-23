// import React, { useState, useEffect } from 'react';
// import { getVendorList } from '../services/vendor'; // Update path as necessary
// import { deleteVendor } from '../services/vendor';

// const AllVendors = () => {
//   const [vendors, setVendors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//       const fetchVendors = async () => {
//           try {
//               const data = await getVendorList();
//               console.log('Fetched data:', data); // Log data to check its structure
//               setVendors(data || []); // Set data or fallback to empty array
//           } catch (ex) {
//               console.error('Error fetching vendors:', ex);
//               setError('Failed to fetch vendors');
//           } finally {
//               setLoading(false);
//           }
//       };

//       fetchVendors();
//   }, []); // Empty dependency array ensures this runs only once

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this vendor?')) {
//       try {
//         await deleteVendor(id); // Call the delete function
//         setVendors(vendors.filter(vendor => vendor.id !== id)); // Remove the deleted vendor from the list
//       } catch (ex) {
//         console.error('Error deleting vendor:', ex);
//         setError('Failed to delete vendor');
//       }
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//  return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>All Vendors</h2>
//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th style={styles.th}>ID</th>
//             <th style={styles.th}>First Name</th>
//             <th style={styles.th}>Last Name</th>
//             <th style={styles.th}>Email</th>
//             <th style={styles.th}>Phone No</th>
//             <th style={styles.th}>Actions</th> {/* Added Actions column */}
//           </tr>
//         </thead>
//         <tbody>
//           {vendors.map(vendor => (
//             <tr key={vendor.id}>
//               <td style={styles.td}>{vendor.id}</td>
//               <td style={styles.td}>{vendor.firstName}</td>
//               <td style={styles.td}>{vendor.lastName}</td>
//               <td style={styles.td}>{vendor.email}</td>
//               <td style={styles.td}>{vendor.phoneNo}</td>
//               <td style={styles.td}>
//                 <button
//                   style={styles.button}
//                   onClick={() => handleDelete(vendor.id)} // Attach click handler
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '20px',
//     backgroundColor: '#ffe4e1',
//     borderRadius: '8px',
//     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//     maxWidth: '800px',
//     margin: '20px auto',
//     textAlign: 'center',
//   },
//   heading: {
//     fontSize: '1.8rem',
//     color: '#333',
//     marginBottom: '20px',
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//   },
//   th: {
//     borderBottom: '2px solid #ddd',
//     padding: '8px',
//     backgroundColor: '#f2f2f2',
//     fontSize: '1rem',
//   },
//   td: {
//     borderBottom: '1px solid #ddd',
//     padding: '8px',
//     textAlign: 'center',
//     fontSize: '0.9rem',
//   },
//   button: {
//     backgroundColor: '#ff4d4d',
//     color: 'white',
//     border: 'none',
//     padding: '6px 12px',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '0.9rem',
//   },
// };

// export default AllVendors;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getVendorList, deleteVendor } from '../services/vendor'; // Update path as necessary

const AllVendors = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const data = await getVendorList();
        console.log('Fetched data:', data); // Log data to check its structure
        setVendors(data || []); // Set data or fallback to empty array
      } catch (ex) {
        console.error('Error fetching vendors:', ex);
        setError('Failed to fetch vendors');
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, []); // Empty dependency array ensures this runs only once

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this vendor?')) {
      try {
        await deleteVendor(id); // Call the delete function
        setVendors(vendors.filter(vendor => vendor.id !== id)); // Remove the deleted vendor from the list
      } catch (ex) {
        console.error('Error deleting vendor:', ex);
        setError('Failed to delete vendor');
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>All Vendors</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>First Name</th>
            <th style={styles.th}>Last Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Phone No</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map(vendor => (
            <tr key={vendor.id}>
              <td style={styles.td}>{vendor.id}</td>
              <td style={styles.td}>{vendor.firstName}</td>
              <td style={styles.td}>{vendor.lastName}</td>
              <td style={styles.td}>{vendor.email}</td>
              <td style={styles.td}>{vendor.phoneNo}</td>
              <td style={styles.td}>
                <button
                  style={styles.button}
                  onClick={() => handleDelete(vendor.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button style={styles.backButton} onClick={() => navigate('/admindashboard')}>
        Back to Dashboard
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#ffe4e1',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '20px auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    borderBottom: '2px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    fontSize: '1rem',
  },
  td: {
    borderBottom: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
  button: {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  backButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#008000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AllVendors;