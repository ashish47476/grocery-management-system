import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    
    const [product, setProduct] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetch(`http://your-api-url.com/api/products/${productId}`)  // Replace with your API URL
            .then(response => response.json())
            .then(data => {
                setProduct(data);
                setName(data.name);
                setDescription(data.description);
                setCategory(data.category);
                setImage(null);  // If image URL is needed, handle accordingly
            })
            .catch(error => console.error('Error fetching product:', error));
    }, [productId]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && description && category) {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('category', category);
            if (image) {
                formData.append('image', image);
            }

            fetch(`http://your-api-url.com/api/products/${productId}`, {  // Replace with your API URL
                method: 'PUT',
                body: formData,
            })
            .then(response => response.json())
            .then(updatedProduct => {
                navigate('/allproducts');  // Redirect to All Products
            })
            .catch(error => console.error('Error updating product:', error));
        }
    };

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div style={{ backgroundColor: '#ffe5e5', minHeight: '100vh', padding: '20px' }}>
            <div className="container mt-4" style={{ maxWidth: '600px', margin: 'auto' }}>
                <h3 className="text-center text-dark mb-4" style={{ fontSize: '2rem' }}>Update Product</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="text-dark" style={{ fontSize: '1.25rem' }}>Product Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                            style={{ fontSize: '1.15rem', padding: '10px' }}
                            placeholder="Enter the Product Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="text-dark" style={{ fontSize: '1.25rem' }}>Description</label>
                        <textarea 
                            className="form-control" 
                            id="description" 
                            rows="3" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            required 
                            style={{ fontSize: '1.15rem', padding: '10px' }}
                            placeholder="Enter the Product Description" 
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category" className="text-dark" style={{ fontSize: '1.25rem' }}>Category</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="category" 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)} 
                            required 
                            style={{ fontSize: '1.15rem', padding: '10px' }}
                            placeholder='Select the Category'
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image" className="text-dark" style={{ fontSize: '1.25rem' }}>Product Image</label>
                        <input 
                            type="file" 
                            className="form-control-file" 
                            id="image" 
                            onChange={(e) => setImage(e.target.files[0])} 
                            style={{ fontSize: '1.15rem' }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3" style={{ fontSize: '1.25rem', padding: '10px' }}>Update Product</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
