import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage({ onBackClick, onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'ric' && password === '1234') {
      onLoginSuccess(); // go to dashboard
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
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
        <button className="back-button" onClick={onBackClick}>Back</button>
      </div>
    </div>
  );
}

export default LoginPage;
