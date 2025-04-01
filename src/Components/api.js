const api = async (username, password, navigate) => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        
        localStorage.setItem('accessToken', data.token);
        navigate('/dashboard');
      } else {
        
        alert(data.message || 'Invalid username or password.');
      }
    } catch (error) {
      
      alert('An error occurred: ' + error.message);
    }
  }
  
  export default api;
  




// import { useMutation } from '@tanstack/react-query';

// const loginApi = async (username, password) => {
//   const response = await fetch('https://dummyjson.com/auth/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ username, password }),
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Invalid username or password.');
//   }

//   return data; // Return the response data (token)
// };

// const useLogin = () => {
//   const mutation = useMutation({
//     mutationFn: loginApi,
//     onSuccess: (data) => {
//       // Store the access token and navigate to the dashboard on success
//       localStorage.setItem('accessToken', data.token);
//       // Navigate to the dashboard route
//       navigate('/dashboard');
//     },
//     onError: (error) => {
//       // Handle error (show alert or handle error message)
//       alert(error.message || 'An error occurred during login.');
//     },
//   });

//   return mutation;
// };

// export default useLogin;
