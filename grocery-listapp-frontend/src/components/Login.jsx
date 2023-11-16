import React, { useState } from 'react';
import '../App.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Call your backend API to log in the user
    // You can use fetch or axios for this purpose
    // Example: fetch('/api/login', { method: 'POST', body: JSON.stringify({ username, password }) })
    onLogin(username, password);
  };

  return (
    <div className="Login">
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
