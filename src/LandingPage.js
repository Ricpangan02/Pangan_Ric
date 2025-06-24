import React from 'react';
import './LandingPage.css';

function LandingPage({ onLoginClick }) {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to My App</h1>
        <p>Experience secure and fast login. Simplify your access.</p>
        <button onClick={onLoginClick}>Go to Login</button>
      </div>
    </div>
  );
}

export default LandingPage;
