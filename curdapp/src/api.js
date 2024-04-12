import axios from 'axios';

// Base URL for the API
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Fetch all items
export const getItems = async () => {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    return response.data;
};

// Fetch an item by ID
export const getItemById = async (itemId) => {
    const response = await axios.get(`${API_BASE_URL}/posts/${itemId}`);
    return response.data;
};

// Create a new item
export const createItem = async (item) => {
    const response = await axios.post(`${API_BASE_URL}/posts`, item);
    return response.data;
};
// Update an item by ID
export const updateItem = async (itemId, item) => {
    const response = await axios.put(`${API_BASE_URL}/posts/${itemId}`, item);
    return response.data;
};

// Delete an item by ID
export const deleteItem = async (itemId) => {
    await axios.delete(`${API_BASE_URL}/posts/${itemId}`);
};
