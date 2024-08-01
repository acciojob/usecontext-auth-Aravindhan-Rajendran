// src/Auth.js
import React from 'react';
import { useAuth } from './AuthContext';

const Auth = () => {
  const { isAuthenticated, authenticate } = useAuth();

  return (
    <div>
      {/* Display message based on authentication status */}
      <h1>{isAuthenticated ? "You are authenticated!" : "Click on the checkbox to get authenticated"}</h1>
      <div>
        {/* Checkbox to simulate authentication */}
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

export default Auth;
