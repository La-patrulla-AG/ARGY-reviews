import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const {token}=useAuth();
  if (!token) return navigate("/");
  return <Outlet />;
};

export default PrivateRoute;