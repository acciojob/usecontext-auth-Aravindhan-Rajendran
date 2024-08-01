// src/App.js
import React from 'react';
import { AuthProvider, useAuth } from './AuthContext';
import './../styles/App.css';

const Auth = () => {
  const { isAuthenticated, authenticate } = useAuth();

  return (
    <div>
      <h1>{isAuthenticated ? "You are authenticated!" : "Click on the checkbox to get authenticated"}</h1>
      <div>
        <input
          type="checkbox"
          onChange={authenticate}
          id="auth-checkbox"
        />
        <label htmlFor="auth-checkbox">I'm not a robot</label>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Auth />
    </AuthProvider>
  );
};

export default App;
