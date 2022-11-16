import React, { createContext, useState } from "react";

export const AuthContextPro = createContext();
const AuthContext = ({ children }) => {
  const [userIn, setUserIn] = useState(false);
  return (
    <AuthContextPro.Provider value={{ userIn, setUserIn }}>
      {children}
    </AuthContextPro.Provider>
  );
};

export default AuthContext;
