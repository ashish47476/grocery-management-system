import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const ProductManager = () => {
    const [products, setProducts] = useState([]);

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    return (
        <div>
            <ProductForm addProduct={addProduct} />
            <ProductList products={products} />
        </div>
    );
};

export default ProductManager;
