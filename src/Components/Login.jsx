import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

 import api from './api';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        await api(username, password, navigate);

      };

  return (
    <>
    <h1>Login</h1>
    <form  onSubmit={handleSubmit}>
          <div className="mb-4 ">
          <label>
              email
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md "
            />
          </div>
          <div className="mb-6">
            <label>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md "
            />
          </div>
        
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md "
          >
            Login
          </button>
        </form>
    </>
  )
}

export default Login