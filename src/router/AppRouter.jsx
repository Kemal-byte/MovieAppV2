import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextPro } from "../context/AuthContext";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/detail" element={<MovieDetail />} /> */}
        <Route path="/detail" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
