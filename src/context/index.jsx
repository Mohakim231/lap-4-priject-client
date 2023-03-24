import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState();

  const signup = async (username, password) => {
    const url = 'http://localhost:5000/register'
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password}),
    };
    console.log(username, password)
    try {
      const response = await fetch(url, options)
      const data = await response.json();
      // console.log("line 23" + data)
      // setCurrentUser(data)
      console.log(data)
    } catch (error) {
      console.error("Error registering user", error);
      throw new Error(error.message);
    }
  }

  const signin = async (username, password) => {
    console.log(currentUser)
    const url = "http://localhost:5000/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password}),
    };
    try {
      const response = await fetch(url, options);
      console.log(response)
      if (response.ok) {
        const user = await response.json();
        console.log("line 45" + user)
        console.log(currentUser)
        setCurrentUser(user.username);
        console.log(currentUser)
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.error("Error logging user in", error);
      throw new Error(error.message);
    }
  };

  const logout = () => {
    setCurrentUser(null)
  }

  const value ={
    currentUser,
    signup,
    signin,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);