import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import api from './api';
import { useMutation } from '@tanstack/react-query';
import LoginUser from './api';


const Login = () => {

    const navigate = useNavigate()
    const [data, setData] = useState({
        username: "",
        password: ""
    });
    const mutation = useMutation({
        mutationFn:LoginUser,
        onSuccess: (data) => {
            console.log("onSuccess", data)
            alert("Login Successful!")
            localStorage.setItem("token", data.accessToken)
            navigate("/dashboard")
        }
    })


    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("onSubmit: ", data)
        mutation.mutate(data)
        
    }


    const handleChange = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }


    // const navigate = useNavigate();
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     await api(username, password, navigate);
    // };

    return (
        <div >
           
                <h1 >Login</h1>
                <form onSubmit={handleSubmit}>
                    <div >
                        <label >Email</label>
                        <input
                            type="text"

                            onChange={handleChange}
                            required
                            name='username'
                        />
                    </div>
                    <div >
                        <label >Password</label>
                        <input
                            type="password"
                            
    
                            onChange={handleChange}
                            name='password'
                            required
                        />
                    </div>
                    <button
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            
        </div>
    );
};

export default Login;
