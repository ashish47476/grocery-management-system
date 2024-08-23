// // import React, { useState } from 'react';

// // const Vendor = () => {
// //     const [vendorDetails, setVendorDetails] = useState({
// //         firstName: '',
// //         lastName: '',
// //         email: '',
// //         password: '',
// //         mobile: '',
// //     });

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setVendorDetails(prevDetails => ({
// //             ...prevDetails,
// //             [name]: value
// //         }));
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         console.log('Vendor Details:', vendorDetails);
// //         // Perform actions like API call to save vendor details
// //     };

// //     return (
// //         <div style={{ backgroundColor: '#ffe5e5', minHeight: '100vh', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
// //             <div className="vendor-card" style={{ backgroundColor: '#ffadad', borderRadius: '15px', padding: '20px', maxWidth: '500px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
// //                 <h2 className="vendor-title" style={{ fontSize: '2rem', marginBottom: '20px', textAlign: 'center', color: '#fff' }}>Vendor Registration</h2>
// //                 <form onSubmit={handleSubmit}>
// //                     <div className="form-group">
// //                         <label htmlFor="firstName" style={{ color: '#fff', fontSize: '1.25rem' }}>First Name</label>
// //                         <input 
// //                             type="text" 
// //                             className="form-control" 
// //                             id="firstName" 
// //                             name="firstName" 
// //                             value={vendorDetails.firstName} 
// //                             onChange={handleChange} 
// //                             style={{ fontSize: '1.25rem', padding: '10px' }}
// //                             required 
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="lastName" style={{ color: '#fff', fontSize: '1.25rem' }}>Last Name</label>
// //                         <input 
// //                             type="text" 
// //                             className="form-control" 
// //                             id="lastName" 
// //                             name="lastName" 
// //                             value={vendorDetails.lastName} 
// //                             onChange={handleChange} 
// //                             style={{ fontSize: '1.25rem', padding: '10px' }}
// //                             required 
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="email" style={{ color: '#fff', fontSize: '1.25rem' }}>Email</label>
// //                         <input 
// //                             type="email" 
// //                             className="form-control" 
// //                             id="email" 
// //                             name="email" 
// //                             value={vendorDetails.email} 
// //                             onChange={handleChange} 
// //                             style={{ fontSize: '1.25rem', padding: '10px' }}
// //                             required 
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="password" style={{ color: '#fff', fontSize: '1.25rem' }}>Password</label>
// //                         <input 
// //                             type="password" 
// //                             className="form-control" 
// //                             id="password" 
// //                             name="password" 
// //                             value={vendorDetails.password} 
// //                             onChange={handleChange} 
// //                             style={{ fontSize: '1.25rem', padding: '10px' }}
// //                             required 
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="mobile" style={{ color: '#fff', fontSize: '1.25rem' }}>Mobile No.</label>
// //                         <input 
// //                             type="tel" 
// //                             className="form-control" 
// //                             id="mobile" 
// //                             name="mobile" 
// //                             value={vendorDetails.mobile} 
// //                             onChange={handleChange} 
// //                             style={{ fontSize: '1.25rem', padding: '10px' }}
// //                             required 
// //                         />
// //                     </div>
// //                     <button type="submit" className="btn btn-primary mt-4" style={{ width: '100%', fontSize: '1.25rem', padding: '10px' }}>Save</button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Vendor;
// import { useNavigate } from 'react-router-dom';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const Vendor = () => {
//     const [vendorDetails, setVendorDetails] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         phoneNo: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setVendorDetails(prevDetails => ({
//             ...prevDetails,
//             [name]: value
//         }));
//     };
//     const navigate = useNavigate();
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const { firstName, lastName, email, password, phoneNo } = vendorDetails;

//         // Client-side validation
//         if (firstName.length === 0) {
//             toast.warning('Please enter your first name');
//         } else if (lastName.length === 0) {
//             toast.warning('Please enter your last name');
//         } else if (email.length === 0) {
//             toast.warning('Please enter your email');
//         } else if (!isValidEmail(email)) {
//             toast.warning('Email is not valid');
//         } else if (password.length === 0) {
//             toast.warning('Please enter your password');
//         } else if (phoneNo.length === 0) {
//             toast.warning('Please enter your mobile number');
//         } else {
//             // Make the API call to add vendor
//             try {
//                 const response = await axios.post('http://localhost:8080/admin/addVendor', {
//                     ...vendorDetails,
//                     role: 'ROLE_VENDOR' // Setting the role for the vendor
//                 });

//                 if (response.status === 200) {
//                     toast.success('Vendor successfully added');
//                     navigate('/admindashboard');
//                     // Optionally redirect or reset form here
//                 } else {
//                     toast.error('Failed to add vendor');
//                 }
//             } catch (error) {
//                 console.error('Error during adding vendor:', error);
//                 toast.error('Failed to add vendor. Please try again.');
//             }
//         }
//     };

//     const isValidEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };

//     return (
//         <div style={{ backgroundColor: '#ffe5e5', minHeight: '100vh', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             <div className="vendor-card" style={{ backgroundColor: '#ffadad', borderRadius: '15px', padding: '20px', maxWidth: '500px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
//                 <h2 className="vendor-title" style={{ fontSize: '2rem', marginBottom: '20px', textAlign: 'center', color: '#fff' }}>Vendor Registration</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="firstName" style={{ color: '#fff', fontSize: '1.25rem' }}>First Name</label>
//                         <input 
//                             type="text" 
//                             className="form-control" 
//                             id="firstName" 
//                             name="firstName" 
//                             value={vendorDetails.firstName} 
//                             onChange={handleChange} 
//                             style={{ fontSize: '1.25rem', padding: '10px' }}
//                             required 
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="lastName" style={{ color: '#fff', fontSize: '1.25rem' }}>Last Name</label>
//                         <input 
//                             type="text" 
//                             className="form-control" 
//                             id="lastName" 
//                             name="lastName" 
//                             value={vendorDetails.lastName} 
//                             onChange={handleChange} 
//                             style={{ fontSize: '1.25rem', padding: '10px' }}
//                             required 
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email" style={{ color: '#fff', fontSize: '1.25rem' }}>Email</label>
//                         <input 
//                             type="email" 
//                             className="form-control" 
//                             id="email" 
//                             name="email" 
//                             value={vendorDetails.email} 
//                             onChange={handleChange} 
//                             style={{ fontSize: '1.25rem', padding: '10px' }}
//                             required 
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password" style={{ color: '#fff', fontSize: '1.25rem' }}>Password</label>
//                         <input 
//                             type="password" 
//                             className="form-control" 
//                             id="password" 
//                             name="password" 
//                             value={vendorDetails.password} 
//                             onChange={handleChange} 
//                             style={{ fontSize: '1.25rem', padding: '10px' }}
//                             required 
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="mobile" style={{ color: '#fff', fontSize: '1.25rem' }}>Mobile No.</label>
//                         <input 
//                             type="tel" 
//                             className="form-control" 
//                             id="phoneNo" 
//                             name="phoneNo" 
//                             value={vendorDetails.phoneNo} 
//                             onChange={handleChange} 
//                             style={{ fontSize: '1.25rem', padding: '10px' }}
//                             required 
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-primary mt-4" style={{ width: '100%', fontSize: '1.25rem', padding: '10px' }}>Save</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Vendor;



import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Vendor = () => {
    const [vendorDetails, setVendorDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNo: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVendorDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password, phoneNo } = vendorDetails;

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
        } else if (phoneNo.length === 0) {
            toast.warning('Please enter your mobile number');
        } else {
            // Make the API call to add vendor
            try {
                const response = await axios.post('http://localhost:8080/admin/addVendor', {
                    ...vendorDetails,
                    role: 'ROLE_VENDOR' // Setting the role for the vendor
                });

                if (response.status === 200) {
                    toast.success('Vendor successfully added');
                    navigate('/admindashboard'); // Navigate to the admin dashboard
                } else {
                    toast.error('Failed to add vendor');
                }
            } catch (error) {
                console.error('Error during adding vendor:', error);
                toast.error('Failed to add vendor. Please try again.');
            }
        }
    };

    const styles = {
        container: {
            backgroundColor: '#f8f9fa',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            transition: 'background-color 0.3s ease',
        },
        containerHover: {
            backgroundColor: '#e9ecef',
        },
        card: {
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            padding: '20px',
            maxWidth: '500px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.3s ease',
        },
        cardHover: {
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        },
        title: {
            fontSize: '2rem',
            marginBottom: '20px',
            textAlign: 'center',
            color: '#333',
            transition: 'color 0.3s ease',
        },
        titleHover: {
            color: '#007bff',
        },
        formGroup: {
            marginBottom: '15px',
        },
        label: {
            display: 'block',
            color: '#495057',
            fontSize: '1.1rem',
            marginBottom: '5px',
        },
        input: {
            width: '100%',
            padding: '10px',
            fontSize: '1rem',
            borderRadius: '5px',
            border: '1px solid #ced4da',
            transition: 'border-color 0.3s ease',
        },
        inputFocus: {
            borderColor: '#007bff',
            outline: 'none',
        },
        button: {
            width: '100%',
            padding: '10px',
            fontSize: '1.1rem',
            color: '#fff',
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
    };

    return (
        <div 
            style={styles.container}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.containerHover.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.container.backgroundColor}
        >
            <div 
                className="vendor-card"
                style={styles.card}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = styles.cardHover.boxShadow}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = styles.card.boxShadow}
            >
                <h2 
                    className="vendor-title"
                    style={styles.title}
                    onMouseOver={(e) => e.currentTarget.style.color = styles.titleHover.color}
                    onMouseOut={(e) => e.currentTarget.style.color = styles.title.color}
                >
                    Vendor Registration
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group" style={styles.formGroup}>
                        <label htmlFor="firstName" style={styles.label}>First Name</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            value={vendorDetails.firstName} 
                            onChange={handleChange} 
                            style={styles.input}
                            required 
                        />
                    </div>
                    <div className="form-group" style={styles.formGroup}>
                        <label htmlFor="lastName" style={styles.label}>Last Name</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            name="lastName" 
                            value={vendorDetails.lastName} 
                            onChange={handleChange} 
                            style={styles.input}
                            required 
                        />
                    </div>
                    <div className="form-group" style={styles.formGroup}>
                        <label htmlFor="email" style={styles.label}>Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={vendorDetails.email} 
                            onChange={handleChange} 
                            style={styles.input}
                            required 
                        />
                    </div>
                    <div className="form-group" style={styles.formGroup}>
                        <label htmlFor="password" style={styles.label}>Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={vendorDetails.password} 
                            onChange={handleChange} 
                            style={styles.input}
                            required 
                        />
                    </div>
                    <div className="form-group" style={styles.formGroup}>
                        <label htmlFor="phoneNo" style={styles.label}>Mobile No.</label>
                        <input 
                            type="tel" 
                            id="phoneNo" 
                            name="phoneNo" 
                            value={vendorDetails.phoneNo} 
                            onChange={handleChange} 
                            style={styles.input}
                            required 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn-submit"
                        style={styles.button}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Vendor;
