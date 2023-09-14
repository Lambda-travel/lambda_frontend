/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize isAuthenticated from cookies on component mount
  useEffect(() => {
    const token = Cookies.get('user_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
<AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
  {children}
</AuthContext.Provider>
  );
}

export default AuthContext;

