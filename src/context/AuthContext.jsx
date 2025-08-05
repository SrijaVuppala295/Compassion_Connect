import React from "react";
import { useState, createContext, useContext, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ctoken, setCToken] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    let storeduser = JSON.parse(localStorage.getItem("user"));
    let storedtoken = localStorage.getItem("ctoken");

    if (storeduser && storedtoken) {
      const decoded = jwtDecode(storedtoken);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        logout();
      } else {
        setUser(storeduser);
        setCToken(storedtoken);
      }
      setLoading(true);
    }
  }, []);

  const login = (userData, tokenData) => {
    setUser(userData);
    setCToken(tokenData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("ctoken", tokenData);
  };

  const logout = () => {
    setUser(null);
    setCToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("ctoken");
  };

  return (
    <AuthContext.Provider value={{ user, ctoken, login, logout ,loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
