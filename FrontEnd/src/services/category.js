import axios from 'axios'


export async function getCategories() {
  try {
    const response = await axios.get(`http://localhost:8080/categories`)
    return response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error  // Re-throw error to handle it in the calling function
  }
}


