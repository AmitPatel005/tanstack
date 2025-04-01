import React from 'react';
import { useQuery } from '@tanstack/react-query';
import AddUser from './AddUser';



const fetchUsers = async () => {
  const res = await fetch('https://67eb80a3aa794fb3222a752f.mockapi.io/api/1/users');
  return res.json();
};

const UserList = () => {
 
  const { data, isLoading, error } = useQuery({queryKey:['user'],queryFn: fetchUsers});

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  
  return (
    <div>
      <h2>User Information</h2>
      <AddUser/>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.name}</td>
              <td>{post.lName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
