import React from 'react';
import { useAuth } from './AuthContext';

const Auth = () => {
  const { isAuthenticated, authenticate, logout } = useAuth();

  return (
    <div>
      <p className="authText">
        {isAuthenticated ? "You are now authenticated, you can proceed" : "You are not authenticated"}
      </p>
      <div>
<input
  type="checkbox"
  onChange={(e) => e.target.checked ? authenticate() : logout()}
  id="auth-checkbox"
/>
        <label htmlFor="auth-checkbox">I'm not a robot</label>
      </div>
    </div>
  );
};

export default Auth;
