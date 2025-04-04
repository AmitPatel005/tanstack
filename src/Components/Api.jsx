
// import { useMutation } from '@tanstack/react-query';

// const loginApi = async (username, password) => {
//    const response = await fetch('https://dummyjson.com/auth/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ username, password }),
//     });

//     const data = await response.json();
  
//    if (!response.ok) {
//      throw new Error(data.message || 'Invalid username or password.');
//    }

//    return data;
//  };

// const useLogin = () => {
//   return useMutation({
//     mutationFn: loginApi,
//     onSuccess: (data) => {
      
//       localStorage.setItem('accessToken', data.token);
      
//     },
//     onError: (error) => {
      
//       alert(error.message || 'An error occurred');
//     },
//   });
// };

// export default useLogin;


