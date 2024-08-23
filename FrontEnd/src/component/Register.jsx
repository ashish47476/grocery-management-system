import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Register.css';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNo: '',
        role: 'ROLE_CUSTOMER' // Default role
    });

    const navigate = useNavigate();

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password, confirmPassword, phoneNo, role } = formData;

        // Client-side validation
        if (firstName.length === 0) {
            toast.warning('Please enter your first name');
        } else if (lastName.length === 0) {
            toast.warning('Please enter your last name');
        } else if (email.length === 0) {
            toast.warning('Please enter your email');
        } else if (!isValidEmail(email)) {
            toast.warning('Email is not valid');
        } else if (password.length === 0) {
            toast.warning('Please enter your password');
        } else if (confirmPassword.length === 0) {
            toast.warning('Please confirm your password');
        } else if (password !== confirmPassword) {
            toast.warning('Passwords do not match');
        } else {
            // Make the API call to Spring Boot backend
            try {
                const response = await axios.post('http://localhost:8080/users/register', {
                    firstName,
                    lastName,
                    email,
                    password,
                    phoneNo,
                    role
                });

                if (response.status === 200) {
                    toast.success('Successfully registered a user');
                    navigate('/login'); // Navigate to the login page on success
                } else {
                    toast.error('Failed to register the user');
                }
            } catch (error) {
                console.error('Error during registration:', error);
                toast.error('Registration failed. Please try again.');
            }
        }
    };

    return (
        <div className="register-page">
            <div className="background-overlay d-flex align-items-center justify-content-center">
                <div className="register-container bg-white p-4 rounded shadow">
                    <h2 className="register-title text-center mb-4">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input 
                                type="text" 
                                name="firstName" 
                                placeholder="First Name" 
                                value={formData.firstName} 
                                onChange={handleChange} 
                                required 
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input 
                                type="text" 
                                name="lastName" 
                                placeholder="Last Name" 
                                value={formData.lastName} 
                                onChange={handleChange} 
                                required 
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNo" className="form-label">Phone Number</label>
                            <input 
                                type="tel" 
                                name="phoneNo" 
                                placeholder="Phone Number" 
                                value={formData.phoneNo} 
                                onChange={handleChange} 
                                required 
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                value={formData.password} 
                                onChange={handleChange} 
                                required 
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input 
                                type="password" 
                                name="confirmPassword" 
                                placeholder="Confirm Password" 
                                value={formData.confirmPassword} 
                                onChange={handleChange} 
                                required 
                                className="form-control"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="role" className="form-label">Role</label>
                            <select 
                                name="role" 
                                value={formData.role} 
                                onChange={handleChange} 
                                required 
                                className="form-select"
                            >
                                <option value="ROLE_CUSTOMER">Customer</option>
                                <option value="ROLE_VENDOR">Vendor</option>
                                {/* <option value="ROLE_ADMIN">Admin</option> */}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;