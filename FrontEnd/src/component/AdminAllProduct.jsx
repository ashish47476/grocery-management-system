
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    // Fetch products and categories on component mount
    useEffect(() => {
        const fetchProductsAndCategories = async () => {
            try {
                const productsResponse = await axios.get('http://localhost:8080/products/getAllProductsforVendor');
                setProducts(productsResponse.data);

                const categoriesResponse = await axios.get('http://localhost:8080/categories');
                setCategories(categoriesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProductsAndCategories();
    }, []);

    // Get category name by ID
    const getCategoryName = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.categoryName : 'Unknown';
    };

    // Convert base64 string to image URL
    const getImageUrl = (imageBytes) => {
        return `data:image/jpeg;base64,${imageBytes}`;
    };

    // Delete a product
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/products/${id}`);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>All Products</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>ID</th>
                        <th style={styles.th}>Product Name</th>
                        <th style={styles.th}>Price</th>
                        <th style={styles.th}>Quantity</th>
                        <th style={styles.th}>Expiry Date</th>
                        <th style={styles.th}>Manufacturer</th>
                        <th style={styles.th}>Category</th>
                        <th style={styles.th}>Image</th>
                        <th style={styles.th}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td style={styles.td}>{product.id}</td>
                            <td style={styles.td}>{product.prodName}</td>
                            <td style={styles.td}>{`$${product.productPrice.toFixed(2)}`}</td>
                            <td style={styles.td}>{product.productQuantity}</td>
                            <td style={styles.td}>{new Date(product.productExpDate).toLocaleDateString()}</td>
                            <td style={styles.td}>{product.prodManufact}</td>
                            <td style={styles.td}>{getCategoryName(product.categoryId)}</td>
                            <td style={styles.td}>
                                {product.productImage ? (
                                    <img
                                        src={getImageUrl(product.productImage)}
                                        alt={product.prodName}
                                        style={styles.image}
                                    />
                                ) : (
                                    'No Image'
                                )}
                            </td>
                            <td style={styles.td}>
                                <button style={styles.button} onClick={() => handleDelete(product.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button style={styles.button} onClick={() => navigate('/admindashboard')}>
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
        margin: '5px',
        padding: '5px 10px',
        fontSize: '0.9rem',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    image: {
        width: '100px',
        height: 'auto',
    },
};

export default AdminAllProducts;

