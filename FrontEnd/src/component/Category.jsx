// // // import React, { useState, useEffect } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import axios from 'axios';
// // // import './Category.css';

// // // const Category = () => {
// // //   const [categories, setCategories] = useState([]);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     // For testing purposes, mock API response with sample data
// // //     // Replace this with actual API call in production
// // //     const fetchCategories = async () => {
// // //       try {
// // //         // Mocked response for testing
// // //         const response = {
// // //           data: [
// // //             { id: 1, name: 'Electronics' },
// // //             { id: 2, name: 'Clothing' },
// // //             { id: 3, name: 'Home & Kitchen' },
// // //           ],
// // //         };
// // //         setCategories(response.data);
// // //       } catch (error) {
// // //         console.error('Error fetching categories:', error);
// // //       }
// // //     };

// // //     fetchCategories();
// // //   }, []);

// // //   const handleUpdate = (categoryId) => {
// // //     navigate(`/products/${categoryId}`); // Navigate to product form with category ID
// // //   };

// // //   const handleDelete = async (categoryId) => {
// // //     try {
// // //       // Simulate delete operation (use actual API call in production)
// // //       await axios.delete(`http://localhost:8080/categories/${categoryId}`);
      
// // //       // Remove the deleted category from state
// // //       setCategories(categories.filter(category => category.id !== categoryId));
// // //     } catch (error) {
// // //       console.error('Error deleting category:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="manage-category-container">
// // //       <h1>Manage Categories</h1>
// // //       <Link to="/products">
// // //         <button className="add-product-button">Add Product</button>
// // //       </Link>
// // //       <table className="category-table">
// // //         <thead>
// // //           <tr>
// // //             <th>Category ID</th>
// // //             <th>Category Name</th>
// // //             <th>Edit</th>
// // //             <th>Delete</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {categories.map(category => (
// // //             <tr key={category.id}>
// // //               <td>{category.id}</td>
// // //               <td>{category.name}</td>
// // //               <td>
// // //                 <button onClick={() => handleUpdate(category.id)} className="update-button">Update</button>
// // //               </td>
// // //               <td>
// // //                 <button onClick={() => handleDelete(category.id)} className="delete-button">Delete</button>
// // //               </td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // //export default Category;



// // import React, { useState, useEffect } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import './Category.css';

// // const Category = () => {
// //   const [categories, setCategories] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // Fetch categories using axios
// //     const fetchCategories = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:8080/categories');
// //         console.log(response.data);
// //         setCategories(response.data);
// //       } catch (error) {
// //         console.error('Error fetching categories:', error);
// //       }
// //     };

// //     fetchCategories();
// //   }, []);

// //   const handleUpdate = (categoryId) => {
// //     navigate(`/products/${categoryId}`); // Navigate to product form with category ID
// //   };

// //   const handleDelete = async (categoryId) => {
// //     try {
// //       // Make sure the DELETE endpoint is correct
// //       await axios.delete(`http://localhost:8080/categories/${categoryId}`);
      
// //       // Remove the deleted category from state
// //       setCategories(categories.filter(category => category.id !== categoryId));
// //     } catch (error) {
// //       console.error('Error deleting category:', error);
// //     }
// //   };

// //   return (
// //     <div className="manage-category-container">
// //       <h1>Manage Categories</h1>
// //       <Link to="/products">
// //         <button className="add-product-button">Add Product</button>
// //       </Link>
// //       <table className="category-table">
// //         <thead>
// //           <tr>
// //             <th>Category ID</th>
// //             <th>Category Name</th>
// //             <th>Description</th>
// //             <th>Edit</th>
// //             <th>Delete</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {categories.map(category => (
// //             <tr key={category.id}>
// //               <td>{category.id}</td>
// //               <td>{category.categoryName}</td>
// //               <td>{category.categoryDesc}</td>
// //               <td>
// //                 <button onClick={() => handleUpdate(category.id)} className="update-button">Update</button>
// //               </td>
// //               <td>
// //                 <button onClick={() => handleDelete(category.id)} className="delete-button">Delete</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default Category;
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Category.css';
// import UpdateForm from './UpdateForm';

// const Category = () => {
//   const [categories, setCategories] = useState([]);
//   const [editingCategoryId, setEditingCategoryId] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/categories');
//         setCategories(response.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleUpdate = (categoryId) => {
//     setEditingCategoryId(categoryId);
//   };

//   const handleDelete = async (categoryId) => {
//     try {
//       await axios.delete(`http://localhost:8080/categories/${categoryId}`);
//       setCategories(categories.filter(category => category.id !== categoryId));
//     } catch (error) {
//       console.error('Error deleting category:', error);
//     }
//   };

//   const closeUpdateForm = () => {
//     setEditingCategoryId(null);
//   };

//   return (
//     <div className="manage-category-container">
//       <h1>Manage Categories</h1>
//       <Link to="/products">
//         <button className="add-product-button">Add Product</button>
//       </Link>
//       {editingCategoryId ? (
//         <UpdateForm categoryId={editingCategoryId} onClose={closeUpdateForm} />
//       ) : (
//         <table className="category-table">
//           <thead>
//             <tr>
//               <th>Category ID</th>
//               <th>Category Name</th>
//               <th>Description</th>
//               <th>Edit</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map(category => (
//               <tr key={category.id}>
//                 <td>{category.id}</td>
//                 <td>{category.categoryName}</td>
//                 <td>{category.categoryDesc}</td>
//                 <td>
//                   <button onClick={() => handleUpdate(category.id)} className="update-button">Update</button>
//                 </td>
//                 <td>
//                   <button onClick={() => handleDelete(category.id)} className="delete-button">Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Category;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UpdateForm from './UpdateForm';
import './Category.css';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleUpdate = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setIsUpdateFormVisible(true); // Show the update form
  };

  const handleCloseUpdateForm = () => {
    setIsUpdateFormVisible(false); // Hide the update form
    setSelectedCategoryId(null);
  };

  const handleDelete = async (categoryId) => {
    try {
      await axios.delete(`http://localhost:8080/categories/${categoryId}`);
      setCategories(categories.filter(category => category.id !== categoryId));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleBack = () => {
    navigate('/vendordashboard'); // Navigate back to /vendordashboard
  };

  return (
    <div className="manage-category-container">
      <button className="back-button" onClick={handleBack}>Back</button> {/* Back button */}
      <h1>Manage Categories</h1>
      {!isUpdateFormVisible && (
        <Link to="/addcategory">
          <button className="add-category-button">Add Category</button>
        </Link>
      )}
      {isUpdateFormVisible ? (
        <UpdateForm categoryId={selectedCategoryId} onClose={handleCloseUpdateForm} />
      ) : (
        <table className="category-table">
          <thead>
            <tr>
              <th>Category ID</th>
              <th>Category Name</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.categoryName}</td>
                <td>{category.categoryDesc}</td>
                <td>
                  <button onClick={() => handleUpdate(category.id)} className="update-button">Update</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(category.id)} className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Category;
