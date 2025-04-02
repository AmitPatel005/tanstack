import axios from 'axios';

// Base URL
const BASE_URL = 'https://67eb80a3aa794fb3222a752f.mockapi.io/api/1/users';

// Function to fetch all users
export const fetchUsers = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
    }
};

// Function to add a new user
export const createUser = async (newUser) => {
    try {
        const response = await axios.post(BASE_URL, newUser);
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw new Error('Failed to add user');
    }
};

// Function to delete a user by ID
export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw new Error('Failed to delete user');
    }
};

// Function to update a user by ID
export const updateUser = async (updatedUser) => {
    try {
        const response = await axios.put(`${BASE_URL}/${updatedUser.id}`, updatedUser);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw new Error('Failed to update user');
    }
};
