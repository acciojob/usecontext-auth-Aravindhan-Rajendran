import React from 'react';
import { useAuth } from './AuthContext';

const Auth = () => {
  const { isAuthenticated, authenticate } = useAuth();

  return (
    <div>
      <p className="authText">
        {isAuthenticated ? "You are now authenticated, you can proceed" : "You are not authenticated"}
      </p>
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

export default Auth;
