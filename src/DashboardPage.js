import React from 'react';
import './DashboardPage.css';


console.log("Dashboard loaded");
function DashboardPage({ onLogout }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>Welcome, My Lord Ric!</h1>
        <p>You are now logged in.</p>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export default DashboardPage;
