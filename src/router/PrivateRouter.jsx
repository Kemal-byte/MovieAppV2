import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContextPro } from "../context/AuthContext";

const PrivateRouter = () => {
  const { userIn } = useContext(AuthContextPro);
  console.log(userIn);
  return userIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRouter;
