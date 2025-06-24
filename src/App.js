import React, { useState } from 'react';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';

function App() {
  const [view, setView] = useState('landing'); // 'landing' | 'login' | 'dashboard'

  return (
    <>
      {view === 'landing' && (
        <LandingPage onLoginClick={() => setView('login')} />
      )}
      {view === 'login' && (
        <LoginPage
          onBackClick={() => setView('landing')}
          onLoginSuccess={() => setView('dashboard')}
        />
      )}
      {view === 'dashboard' && (
        <DashboardPage onLogout={() => setView('landing')} />
      )}
    </>
  );
}

export default App;
