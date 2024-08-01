import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const Auth = () => {
  const { isAuthenticated, authenticate, logout } = useAuth();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      authenticate();
    }
  };

  return (
    <div>
      <p className="authText">
        {isAuthenticated ? "You are now authenticated, you can proceed" : "You are not authenticated"}
      </p>
      <div>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          id="auth-checkbox"
          checked={isChecked}
        />
        <label htmlFor="auth-checkbox">I'm not a robot</label>
      </div>
      {isAuthenticated && (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
};

export default Auth;
