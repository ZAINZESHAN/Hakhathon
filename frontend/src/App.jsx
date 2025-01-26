import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Home from './pages/Home';
import Calculator from './pages/Calculator'; // Add Calculator page
import Dashboard from './pages/Dashboard'; // Add Dashboard page
import About from './pages/About'; // Add About Us page
import { useState } from 'react';
import Navbar from './pages/Navbar';
import Loan from './pages/Loan';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token') !== null);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
