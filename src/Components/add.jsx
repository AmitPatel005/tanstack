import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';


const fetchUsers = async () => {
  const res = await fetch('https://67eb80a3aa794fb3222a752f.mockapi.io/api/1/users');
  return res.json();
};


const addUser = async (newUser) => {
  const res = await fetch('https://67eb80a3aa794fb3222a752f.mockapi.io/api/1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
  return res.json();
};

const UserList = () => {

  const [newUser, setNewUser] = useState({ name: '', lName: '' });


  const queryClient = useQueryClient();


  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });


  const { mutate } = useMutation(addUser, {
    onSuccess: () => {

      queryClient.invalidateQueries(['users']);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newUser.name && newUser.lName) {

      mutate(newUser);


      setNewUser({ name: '', lName: '' });
    }
  };


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div>
      <h2>User Information</h2>
      

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
        <button type="submit">Add User</button>
      </form>


      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.lName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
