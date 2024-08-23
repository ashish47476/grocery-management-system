// import React, { useState, useContext } from 'react';
// import { UserContext } from '../UserContext.js';
//import axios from 'axios';
// import { useEffect } from 'react';

// const Profile = () => {
//     const { user, setUser } = useContext(UserContext);
//     const [isEditing, setIsEditing] = useState(false);
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         address: '',
//     });

//     useEffect(() => {
//         if (user) {
//             setFormData(user);
//         }
//     }, [user]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSave = async () => {
//         try {
//             const token = localStorage.getItem('token');
//             await axios.put('http://localhost:8080/users/me', formData, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setUser(formData);
//             setIsEditing(false);
//         } catch (error) {
//             console.error('Error saving user data:', error);
//         }
//     };

//     if (!user) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div>
//             <h2>User Profile</h2>
//             {isEditing ? (
//                 <div>
//                     <label>
//                         Username:
//                         <input
//                             type="text"
//                             name="username"
//                             value={formData.username}
//                             onChange={handleChange}
//                         />
//                     </label>
//                     <br />
//                     <label>
//                         Email:
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                         />
//                     </label>
//                     <br />
//                     <label>
//                         Address:
//                         <input
//                             type="text"
//                             name="address"
//                             value={formData.address}
//                             onChange={handleChange}
//                         />
//                     </label>
//                     <br />
//                     <button onClick={handleSave}>Save</button>
//                     <button onClick={() => setIsEditing(false)}>Cancel</button>
//                 </div>
//             ) : (
//                 <div>
//                     <p><strong>Username:</strong> {user.username}</p>
//                     <p><strong>Email:</strong> {user.email}</p>
//                     <p><strong>Address:</strong> {user.address}</p>
//                     <button onClick={() => setIsEditing(true)}>Edit Profile</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Profile;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Profile.css'; // Import custom CSS

const Profile = () => {
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNo: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Retrieve user data from session storage
                const storedUser = JSON.parse(sessionStorage.getItem('user'));

                if (storedUser) {
                    setUser(storedUser);
                    setFormData(storedUser);
                } else {
                    // Fetch user data from the backend
                    const response = await axios.get('http://localhost:8080/users/profile');

                    if (response.status === 200) {
                        const fetchedUser = response.data;
                        setUser(fetchedUser);
                        setFormData(fetchedUser);
                        sessionStorage.setItem('user', JSON.stringify(fetchedUser)); // Save to session storage
                    } else {
                        console.error('Error fetching user data:', response.status);
                    }
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        try {
            // Retrieve user data from session storage to get the ID
            const storedUser = JSON.parse(sessionStorage.getItem('user'));
            const userId = storedUser?.id; // Use optional chaining to avoid errors if user is null

            if (!userId) {
                console.error('User ID is not available');
                return;
            }

            // Update user profile data on the server
            const response = await axios.put(`http://localhost:8080/users/${userId}`, formData);

            if (response.status === 200) {
                const updatedUser = response.data;
                setUser(updatedUser);
                setFormData(updatedUser);
                sessionStorage.setItem('user', JSON.stringify(updatedUser)); // Update session storage
                setIsEditing(false);
            } else {
                console.error('Error saving user data:', response.status);
            }
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    };

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mt-4">
            <div className="card no-hover">
                <div className="card-header bg-primary text-white">
                    <h2 className="mb-0">User Profile</h2>
                </div>
                <div className="card-body">
                    {isEditing ? (
                        <div className="card no-hover">
                            <div className="card-header bg-info text-white">
                                <h5 className="mb-0">Edit Profile</h5>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">First Name:</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            className="form-control"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Last Name:</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            className="form-control"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Phone No:</label>
                                        <input
                                            type="text"
                                            name="phoneNo"
                                            className="form-control"
                                            value={formData.phoneNo}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <button type="button" className="btn btn-primary me-2" onClick={handleSave}>
                                        Save
                                    </button>
                                    <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div className="card bg-light no-hover">
                            <div className="card-body">
                                <p><strong>Username:</strong> {`${user.firstName} ${user.lastName}`}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Phone No:</strong> {user.phoneNo}</p>
                                <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;






