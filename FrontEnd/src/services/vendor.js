import axios from 'axios';
const BASE_URL = 'http://localhost:8080';

// Function to create URL if needed
const createUrl = (path) => `http://localhost:8080${path}`;

export async function getVendorList() {
    const url = createUrl('/admin/getVendors'); // Updated URL for the request

    try {
        console.log('Fetching vendor list...');

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

// Delete a vendor by ID
export async function deleteVendor(id) {
    const url = createUrl(`/admin/${id}`); // Ensure this URL is correct

    try {
        const response = await axios.delete(url, {
            timeout: 10000, // Set timeout to 10 seconds
        });
        
        if (response.status === 200) {
            console.log(`Vendor with ID ${id} deleted successfully`);
        } else {
            console.warn(`Unexpected response status: ${response.status}`);
        }
    } catch (ex) {
        if (ex.response) {
            // Server responded with a status other than 2xx
            console.error(`Server responded with status ${ex.response.status}`);
        } else if (ex.request) {
            // The request was made but no response was received
            console.error('No response received from server');
        } else {
            // Something happened in setting up the request
            console.error('Error setting up request:', ex.message);
        }
        throw ex; // Rethrow the exception to handle it in the component
    }
}

const addVendor = async (vendorData) => {
    try {
      // POST request to the /addVendor endpoint
      const response = await axios.post(`${BASE_URL}/admin/addVendor`, vendorData, {
        headers: {
          'Content-Type': 'application/json',
          // Include any other necessary headers here
        }
      });
  
      // Handle the response if needed
      console.log('Vendor added successfully:', response.data);
      return response.data;
    } catch (error) {
      // Handle errors
      console.error('Error adding vendor:', error);
      throw error;
    }
  };
  
  export default addVendor;

// //addvendor
// export async function addVendor() {
//     const url = createUrl('/admin/addVendor'); // Updated URL for the request

//     try {
//         console.log('Fetching vendor list...');

//         // Make the GET request without token in headers
//         const response = await axios.post(url);

//         // Log response data
//         console.log(response.data);

//         return response.data;
//     } catch (ex) {
//         // Log any errors
//         console.error(ex);

//         return null;
//     }
// }