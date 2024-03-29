import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import MainPage from './MainPage';
console.log("Login is running")
const Login =()=>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  console.log("Inside");
  const handleLogin = () => {
    if (username === 'example' && password === 'password') {
      setLoggedIn(true);
      alert('Login successful!');
      navigate("/MainPage"); // Adjust '/home' to the actual path of your home page
    } else {
      alert('Invalid username or password');
    };
  }; 
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;