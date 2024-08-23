
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCustomerList } from '../services/customer'; // Update path as necessary

const AllCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getCustomerList();
        console.log('Fetched data:', data); // Log data to check its structure
        setCustomers(data || []); // Set data or fallback to empty array
      } catch (ex) {
        console.error('Error fetching customers:', ex);
        setError('Failed to fetch customers');
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []); // Empty dependency array ensures this runs only once

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>All Customers</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>First Name</th>
            <th style={styles.th}>Last Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Phone No</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td style={styles.td}>{customer.id}</td>
              <td style={styles.td}>{customer.firstName}</td>
              <td style={styles.td}>{customer.lastName}</td>
              <td style={styles.td}>{customer.email}</td>
              <td style={styles.td}>{customer.phoneNo}</td>
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

export default AllCustomers;
