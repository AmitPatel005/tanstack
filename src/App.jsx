
import './App.css'
import Dashboart from './Components/Dashboart';
import Login from './Components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

 const queryClient = new QueryClient();
function App() {
  

  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboart/>}/>
      </Routes>
    </Router>
    </QueryClientProvider>
  )
}

export default App
