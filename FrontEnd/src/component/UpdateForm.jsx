import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateForm.css'; // Add styles here

const UpdateForm = ({ categoryId, onClose }) => {
  const [category, setCategory] = useState({ categoryName: '', categoryDesc: '' });

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/categories/${categoryId}`);
        setCategory(response.data);
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };

    fetchCategory();
  }, [categoryId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/categories/${categoryId}`, category);
      alert('Category updated successfully');
      onClose(); // Close the form after successful update
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  return (
    <div className="update-form-container">
      <h2 className="update-form-heading">Update Category</h2>
      <form onSubmit={handleSubmit} className="update-form">
        <div className="form-group">
          <label htmlFor="categoryName">Category Name</label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            value={category.categoryName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoryDesc">Category Description</label>
          <textarea
            id="categoryDesc"
            name="categoryDesc"
            value={category.categoryDesc}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="submit-button">Update</button>
        <button type="button" onClick={onClose} className="close-button">Close</button>
      </form>
    </div>
  );
};

export default UpdateForm;
