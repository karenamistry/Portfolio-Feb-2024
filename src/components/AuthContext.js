// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authState = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authState === "true");
  }, []);

  const authenticate = (password) => {
    const correctPassword = process.env.REACT_APP_SHARED_PASSWORD;
    const authSuccess = password === correctPassword;
    setIsAuthenticated(authSuccess);
    localStorage.setItem("isAuthenticated", authSuccess);
    return authSuccess;
  };

  const value = {
    isAuthenticated,
    authenticate,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
