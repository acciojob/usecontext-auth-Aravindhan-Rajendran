import React from 'react';
import { AuthProvider } from './AuthContext';
import Auth from './Auth';

const App = () => {
  return (
    <AuthProvider>
      <div className="main-container">
        <h1>Authentication Simulation</h1>
        <Auth />
      </div>
    </AuthProvider>
  );
};

export default App;
