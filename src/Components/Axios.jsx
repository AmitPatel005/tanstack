import React, { useEffect, useState } from "react";
import axios from "axios";


const Axios = () => {
  const [data, setData] = useState([]); 
  const [error, setError] = useState(null); 



  useEffect(() => {
    
    const posts = async () => {
      try {
        const response = await axios.get(
          "https://67eb80a3aa794fb3222a752f.mockapi.io/api/1/users"
        );
        setData(response.data);
      } catch (e) {
        setError(e);
      } 
    
    };
    posts()
  }, []);

  if(error){
    return <>err : {error}</>
  }

 
  return(
    <>
    <div>
      <h2>User Information</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.name}</td>
              <td>{post.lName}</td>
              <td>{new Date(post.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
  )
};

export default Axios;
