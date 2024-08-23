import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CategoryForm = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryDesc, setCategoryDesc] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch initial categories
    axios.get('http://localhost:8080/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching categories!', error);
      });
  }, []);

  const addCategory = (event) => {
    event.preventDefault();
    if (categoryName && categoryDesc) {
      const newCategory = {
        categoryName: categoryName,
        categoryDesc: categoryDesc,
      };

      axios.post('http://localhost:8080/categories', newCategory)
        .then(response => {
          setCategories([...categories, response.data]);
          setCategoryName('');
          setCategoryDesc('');
          alert('Category added successfully!'); // Show alert
        })
        .catch(error => {
          console.error('There was an error creating the category!', error);
        });
    }
  };

  const handleBack = () => {
    navigate('/managecategory');
  };

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.formWrapper}>
          <h2><center><b>Category Form</b></center></h2>
          <form onSubmit={addCategory}>
            <div style={styles.formGroup}>
              <label htmlFor="categoryName">Category Name:</label>
              <input
                type="text"
                id="categoryName"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="categoryDesc">Category Description:</label>
              <textarea
                id="categoryDesc"
                value={categoryDesc}
                onChange={(e) => setCategoryDesc(e.target.value)}
                style={styles.textarea}
              />
            </div>
            <div style={styles.buttonContainer}>
              <button type="submit" style={styles.button}>Add Category</button>
              <button type="button" onClick={handleBack} style={styles.backButton}>Back</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#F4C9C1', // Faint strawberry color
    padding: '20px',
  },
  formWrapper: {
    padding: '20px',
    backgroundColor: '#fff', // White background for form
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  backButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginLeft: '10px',
  },
  buttonContainer: {
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default CategoryForm;
