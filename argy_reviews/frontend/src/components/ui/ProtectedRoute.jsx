import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function ProtectedRoute({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    auth().catch(() => setIsAuthorized(false));
  }, []);

  const auth = async () => {
    const token = localStorage.getItem("Token");
    if (!token) {
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
