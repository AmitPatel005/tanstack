import React from 'react';
import { useQuery } from '@tanstack/react-query';
import AddUser from './AddUser';
import axios from 'axios';

const instance = axios.create({
  baseURL: "https://67eb80a3aa794fb3222a752f.mockapi.io/api/1"
})

instance.interceptors.request.use((request)=>{
  const token = localStorage.getItem("token")
  if(token){
    request.headers["Authorization"]= `Bearer ${token}`
  }
  return request
})


const fetchUsers = async () => {
  const res = await instance.get('/users');
  return res.data;
};

const UserList = () => {
 
  const {isLoading, error } = useQuery({queryKey:['user'],queryFn: fetchUsers});

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  
  return (
    <div>
      <h2>User Information</h2>
      <AddUser/>
    </div>
  );
};

export default UserList;
