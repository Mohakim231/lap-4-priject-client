import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState();

  // function signup(username, password){
  //   return AuthContext.createUserWithUsernameAndPassword(username, password)
  // }

  // function login(username, password) {
  //   return AuthContext.signInWithUsernameAndPassword(username, password)
  // }

  // function logout() {
  //   return AuthContext.signOut()
  // }

//   useEffect(() => {
//     const unsubscribe = AuthContext.onAuthStateChanged(user => {
//         setCurrentUser(user)
//     })

//     return unsubscribe
//   },[])
  
  console.log("context updated", { currentUser });

  const value ={
    currentUser,
    // signup,
    // login,
    // logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);