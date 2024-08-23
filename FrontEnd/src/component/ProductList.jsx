import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div className="container mt-4">
            <h3 className="text-center text-dark mb-4">Product List</h3>
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-12 col-md-4 mb-4">
                        <div className="card h-100 shadow-lg" style={{ backgroundColor: '#f7e9dd', borderRadius: '15px' }}>
                            <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title text-primary">{product.name}</h5>
                                <p className="card-text text-dark">{product.description}</p>
                                <p className="card-text text-secondary">Category: {product.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
