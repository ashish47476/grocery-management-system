import React from 'react';

const Payment = () => {
    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePayment = async () => {
        const res = await loadRazorpayScript();

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }

        // Replace with your actual backend API to create order
        const paymentData = await fetch('https://your-backend-api.com/razorpay/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: 50000 }), // Amount in the smallest currency unit (e.g., 50000 for Rs. 500.00)
        }).then((response) => response.json());

        const { amount, id: order_id, currency } = paymentData;

        const options = {
            key: 'YOUR_RAZORPAY_KEY_ID', // Enter the Key ID generated from the Razorpay Dashboard
            amount: amount.toString(),
            currency: currency,
            name: 'Your Company Name',
            description: 'Test Transaction',
            order_id: order_id,
            handler: function (response) {
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                // Handle payment success - usually by making a backend API call to confirm the payment
            },
            prefill: {
                name: 'Vishal Purkar',
                email: 'vishalpurkar.sunbeam@example.com',
                contact: '9999999999',
            },
            notes: {
                address: 'Stanza Living, Hinjewadi Phase 2, Pune',
            },
            theme: {
                color: '#3399cc',
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <div className="container mt-4">
            <h3 className="text-center text-dark mb-4">Make a Payment</h3>
            <div className="d-flex justify-content-center">
                <button onClick={handlePayment} className="btn btn-primary">
                    Pay with Razorpay
                </button>
            </div>
        </div>
    );
};

export default Payment;
