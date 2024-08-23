// import axios from 'axios'
// import config from '../config'

// export async function register(firstName, lastName, email, phone, password) {
//   // body parameters
//   const body = {
//     firstName,
//     lastName,
//     email,
//     phone,
//     password,
//   }

//   // make API call
//   const response = await axios.post("http://localhost:8080/users/register", body)

//   // read JSON data (response)
//   return response.data
// }

// export async function login(email, password) {
//   // body parameters
//   const body = {
//     email,
//     password,
//   }

//   // make API call
//   const response = await axios.post("http://localhost:8080/users/login", body)

//   // read JSON data (response)
//   return response.data
// }

// export const getUserList = async () => {
//   try {
//     const response = await axios.get('http://localhost:8080/allUsers'); // Adjust the URL based on your API endpoint
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching user list:', error);
//     throw error;
//   }
// };
// services/user.js

// services/user.js
import axios from 'axios';

// Function to create URL if needed
const createUrl = (path) => `http://localhost:8080${path}`;

export async function getUserList() {
    const url = createUrl('/admin/getAllUsers'); // Updated URL for the request

    try {
        console.log('Fetching customer list...');

        // Make the GET request without token in headers
        const response = await axios.get(url);

        // Log response data
        console.log(response.data);

        return response.data;
    } catch (ex) {
        // Log any errors
        console.error(ex);

        return null;
    }
}

