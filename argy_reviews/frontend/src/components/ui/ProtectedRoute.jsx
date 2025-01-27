import React from "react";
import { Navigate } from "react-router-dom";
import { useMe } from "../hooks/useMe";

function ProtectedRoute({ children }) {
  const { me, isLoading } = useMe();

  if (isLoading)
    return <div>Loading...</div>;
  
  if (!me)
    return <Navigate to="/" />

  return children
}

export default ProtectedRoute;
