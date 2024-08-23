import axios from 'axios';

// Function to create URL if needed
const createUrl = (path) => `http://localhost:8080${path}`;

export async function getCustomerList() {
    const url = createUrl('/admin/getCustomer'); // Updated URL for the request

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
