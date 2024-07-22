// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuthToken(token);
    } else {
      navigate("/sign-in");
    }
  }, [navigate]);

  const login = (token) => {
    localStorage.setItem("authToken", token);
    setAuthToken(token);
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuthToken(null);
    navigate("/sign-in");
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
