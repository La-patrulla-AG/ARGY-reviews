import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    auth().catch(() => setIsAuthorized(false));
  }, []);

  const auth = async () => {
    if (!user) {
      setIsAuthorized(false);
      return;
    }
    setIsAuthorized(true);
  };
  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }
  return isAuthorized ? children : navigate("/");
}
export default ProtectedRoute;
