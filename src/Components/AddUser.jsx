import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser,deleteUser,updateUser } from './Crud';


const AddUser = () => {
  const [newUser, setNewUser] = useState({ name: '', lName: '' });
  const queryClient = useQueryClient();

 
  const mutation = useMutation({
    mutationFn: createUser, 
    onSuccess: () => {
      
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
    
      console.error('Error adding user:', error);
    }
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      console.error('Error deleting user:', error);
    }
  });

  const updateMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      console.error('Error updating user:', error);
    }
  });


  const handleDeleteSubmit = (id) => {
    deleteMutation.mutate(id);
  };

  const handleUpdateSubmit = (id) => {
    const updatedUser = { ...newUser, id }; // Example logic for updating
    updateMutation.mutate(updatedUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newUser.name && newUser.lName) {
      
      mutation.mutate(newUser);
      setNewUser({ name: '', lName: '' });
    }
  };

  return (
    <div>
      <h3>Add New User</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newUser.lName}
          onChange={(e) => setNewUser({ ...newUser, lName: e.target.value })}
        />
        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Adding...' : 'Add User'}
        </button>
      </form>
      {mutation.isError && <p>Error adding user</p>}
      {mutation.isSuccess && <p>User added successfully!</p>}
    </div>
  );
};

export default AddUser;
