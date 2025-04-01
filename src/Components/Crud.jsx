import axios from 'axios';

export const fetchUsers = async () => {
    const response = await axios.get('https://67eb80a3aa794fb3222a752f.mockapi.io/api/1/users');
    return response.data;
  };
// Function to add a new user
export const createUser = async (newUser) => {
    const response = await axios.post('https://67eb80a3aa794fb3222a752f.mockapi.io/api/1/users', newUser);
    return response.data;
};


// Function to delete a user by ID
export const deleteUser = async (userId) => {
    const response = await axios.delete(`https://67eb80a3aa794fb3222a752f.mockapi.io/api/1/users/${userId}`);
    return response.data;
};

// Function to update a user by ID
export const updateUser = async (updatedUser) => {
    const response = await axios.put(`https://67eb80a3aa794fb3222a752f.mockapi.io/api/1/users/${updatedUser.id}`, updatedUser);
    return response.data;
};
