import React, { useState, useEffect } from 'react';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { createUser, deleteUser, updateUser, fetchUsers } from './Crud';
import './AddUser.css';

const AddUser = () => {
  const [newUser, setNewUser] = useState({ name: '', lName: '' });
  const [editingUser, setEditingUser] = useState(null);
  const queryClient = useQueryClient();

  const { data: users, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

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
      setEditingUser(null); 
    },
    onError: (error) => {
      console.error('Error updating user:', error);
    }
  });

  useEffect(() => {
    if (editingUser) {
      setNewUser({ name: editingUser.name, lName: editingUser.lName });
    }
  }, [editingUser]);

  const handleDeleteSubmit = (id) => {
    deleteMutation.mutate(id);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    if (newUser.name && newUser.lName) {
      const updatedUser = { ...newUser, id: editingUser.id }; 
      updateMutation.mutate(updatedUser);
    }
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
      <h3>{editingUser ? 'Update User' : 'Add New User'}</h3>
      <form onSubmit={editingUser ? handleUpdateSubmit : handleSubmit}>
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
        <button type="submit" disabled={mutation.isLoading || updateMutation.isLoading}>
          {mutation.isLoading || updateMutation.isLoading
            ? editingUser ? 'Updating...' : 'Adding...'
            : editingUser ? 'Update User' : 'Add User'}
        </button>
      </form>

      {isLoading && <p>Loading users...</p>}
      {isError && <p>Error fetching users</p>}

      <h4>Users List</h4>
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {users?.map((user) => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.lName}</td>
        <td>
          <button onClick={() => setEditingUser(user)}>Edit</button>
          <button onClick={() => handleDeleteSubmit(user.id)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      
    </div>
  );
};

export default AddUser;
