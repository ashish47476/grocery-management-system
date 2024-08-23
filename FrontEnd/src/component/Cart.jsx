import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, products = [], handleAddToCart, handleRemoveFromCart, handleBuy }) => {
    const navigate = useNavigate();

    const cartItems = Object.keys(cart).map(productId => {
        const product = products.find(product => product.id === parseInt(productId));
        return product ? {
            ...product,
            quantity: cart[productId]
        } : null;
    }).filter(item => item !== null);

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleBuyNow = () => {
        handleBuy(); // Perform any necessary actions before navigation
        navigate('/payment', { state: { totalAmount } });
    };

    return (
        <div style={{ backgroundColor: '#ffe5e5', minHeight: '100vh', padding: '20px' }}>
            <div className="container mt-4">
                <h3 className="text-center text-dark mb-4">Your Cart</h3>
                {cartItems.length > 0 ? (
                    <>
                        <div className="row">
                            {cartItems.map(item => (
                                <div key={item.id} className="col-12 mb-4">
                                    <div className="card h-100 shadow-lg" style={{ backgroundColor: '#f7e9dd', borderRadius: '15px' }}>
                                        <div className="card-body d-flex justify-content-between align-items-center">
                                            <div>
                                                <h5 className="card-title text-primary">{item.name}</h5>
                                                <p className="card-text text-dark">{item.description}</p>
                                                <p className="card-text text-danger">Price: Rs.{item.price.toFixed(2)}</p>
                                                <p className="card-text text-dark">Quantity: {item.quantity}</p>
                                                <div className="d-flex align-items-center">
                                                    <button 
                                                        className="btn btn-secondary mr-2" 
                                                        onClick={() => handleRemoveFromCart(item.id)}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="mx-2">{item.quantity}</span>
                                                    <button 
                                                        className="btn btn-secondary" 
                                                        onClick={() => handleAddToCart(item.id)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <img src={item.image} alt={item.name} className="img-fluid" style={{ maxHeight: '100px' }} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <h4 className="text-dark">Total Amount: Rs.{totalAmount.toFixed(2)}</h4>
                            <button className="btn btn-success mt-4" onClick={handleBuyNow}>
                                Buy Now
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="text-center">
                        <p className="text-dark">Your cart is empty.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
