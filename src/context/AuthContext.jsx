import React from "react";
import { useState, createContext, useContext, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [ctoken, setCToken] = useState(() => {
    return localStorage.getItem("ctoken") || null;
  });
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    let storeduser = localStorage.getItem("user");
    let storedtoken = localStorage.getItem("ctoken");

    if (storeduser && storedtoken) {
    try {
      const decoded = jwtDecode(storedtoken);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        logout();
      } else {
        setUser(JSON.parse(storeduser)); // ✅ Fix here
        setCToken(storedtoken);
      }
    } catch (err) {
      console.error("Invalid token:", err.message);
      logout(); // Clear corrupted token and user
    }
  }
  setLoading(false);
  }, []);

  const login = (userData, tokenData) => {
    console.log("AuthContext login() called with:", userData, tokenData); // 🐞 Add this

  if (!userData || !tokenData) {
    console.error("Login failed: user or token missing");
    return;
  }



     if (userData && tokenData) {
    setUser(userData);
    setCToken(tokenData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("ctoken", tokenData);
  } else {
    console.error("Login failed: user or token missing");
  }
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
