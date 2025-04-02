// const api = async (username, password, navigate) => {
//     try {
//       const response = await fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });
  
//       const data = await response.json();
  
//       if (response.ok) {
        
//         localStorage.setItem('accessToken', data.token);
//         navigate('/dashboard');
//       } else {
        
//         alert(data.message || 'Invalid username or password.');
//       }
//     } catch (error) {
      
//       alert('An error occurred: ' + error.message);
//     }
//   }
  
//   export default api;
  
import axios from "axios";

const api = axios.create({
  baseURL:"https://dummyjson.com/auth"
})


const LoginUser =async (data)=>{
  try{
    const res = await api.post("/login",data)
    return res.data
  }
  catch (error) {
    console.error('Login error:', error);
  }
}

export default LoginUser