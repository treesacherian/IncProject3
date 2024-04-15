import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  let auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to="/Login" />;
};

export default ProtectedRoutes;
