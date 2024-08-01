
import React from 'react';
import { AuthProvider } from './AuthContext';
import Auth from './Auth'; // Import the Auth component

const App = () => {
  return (
    <AuthProvider>
      <Auth />
    </AuthProvider>
  );
};

export default App;
