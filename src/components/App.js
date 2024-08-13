import React from 'react';
import { useAuth } from './AuthContext';

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useAuth();

  return (
    <div>
      <p className={isAuthenticated ? 'authText' : 'notAuthText'}>
        {isAuthenticated ? 'You are authenticated!' : 'You are not authenticated.'}
      </p>
      <label>
        <input
          type="checkbox"
          checked={isAuthenticated}
          onChange={toggleAuth}
        />
        I am not a robot
      </label>
    </div>
  );
};

export default Auth;
