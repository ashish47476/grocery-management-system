
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    prodName: '',
    productMfgDate: '',
    productExpDate: '',
    productPrice: '',
    productQuantity: '',
    prodManufact: '',
    categoryId: '',
    productImage: null,
  });

  const [categories, setCategories] = useState([]);

  // Fetch categories from the backend when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8080/categories') // This endpoint fetches the categories
      .then(response => {
        setCategories(response.data); // Set categories from the response
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return ''; // Check if the date is invalid

    const month = (`0${date.getMonth() + 1}`).slice(-2);
    const day = (`0${date.getDate()}`).slice(-2);
    const year = date.getFullYear();

    return `${month}-${day}-${year}`; // Format date as MM-dd-yyyy
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('prodName', formData.prodName);
    formDataToSend.append('productMfgDate', formatDate(formData.productMfgDate));
    formDataToSend.append('productExpDate', formatDate(formData.productExpDate));
    formDataToSend.append('productPrice', formData.productPrice);
    formDataToSend.append('productQuantity', formData.productQuantity);
    formDataToSend.append('prodManufact', formData.prodManufact);
    formDataToSend.append('categoryId', formData.categoryId);
    formDataToSend.append('imageFile', formData.productImage);

    axios.post(`http://localhost:8080/products/upload/${formData.categoryId}`, formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      console.log('Product added successfully:', response.data);
      // Clear form or redirect as needed
    })
    .catch(error => {
      console.error('Error adding product:', error);
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h3 style={styles.heading}>Add New Product</h3>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="prodName" style={styles.label}>Product Name:</label>
            <input
              type="text"
              name="prodName"
              value={formData.prodName}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="productMfgDate" style={styles.label}>Manufacturing Date:</label>
            <input
              type="date"
              name="productMfgDate"
              value={formData.productMfgDate}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="productExpDate" style={styles.label}>Expiry Date:</label>
            <input
              type="date"
              name="productExpDate"
              value={formData.productExpDate}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="productPrice" style={styles.label}>Price:</label>
            <input
              type="number"
              name="productPrice"
              value={formData.productPrice}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="productQuantity" style={styles.label}>Quantity:</label>
            <input
              type="number"
              name="productQuantity"
              value={formData.productQuantity}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="prodManufact" style={styles.label}>Manufacturer:</label>
            <input
              type="text"
              name="prodManufact"
              value={formData.prodManufact}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="categoryId" style={styles.label}>Category:</label>
            <select
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              required
              style={styles.select}
            >
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="productImage" style={styles.label}>Product Image:</label>
            <input
              type="file"
              name="productImage"
              onChange={handleChange}
              required
              style={styles.inputFile}
            />
          </div>
          <button type="submit" style={styles.submitButton}>Add Product</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffe5e5',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease-in-out',
  },
  formContainer: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    ':hover': {
      transform: 'scale(1.05)',
    }
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
    textTransform: 'uppercase',
    transition: 'color 0.3s ease-in-out',
  },
  form: {
    transition: 'all 0.3s ease-in-out',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '1.25rem',
    color: '#555',
    marginBottom: '5px',
    display: 'block',
  },
  input: {
    fontSize: '1.15rem',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease-in-out, background-color 0.3s ease-in-out',
  },
  select: {
    fontSize: '1.15rem',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease-in-out, background-color 0.3s ease-in-out',
  },
  inputFile: {
    fontSize: '1.15rem',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'background-color 0.3s ease-in-out',
  },
  submitButton: {
    fontSize: '1.25rem',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
  }
};

export default ProductForm;
