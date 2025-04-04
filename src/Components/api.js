
  
import axios from "axios";

const api = axios.create({
  baseURL:"https://dummyjson.com/auth"
})

api.interceptors.request.use((request)=>{
  const token = localStorage.getItem("token")
  if(token){
    request.headers["Authorization"]= `Bearer ${token}`
  }
  return request
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