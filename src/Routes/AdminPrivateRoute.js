import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getAuthority } from "../api/getRole";
import { AuthContext } from "../context/ContextProvider";
import CenterSpinner from "../Spinner/CenterSpinner";

const AdminPrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [roleLoding, setRoleLoading] = useState(true);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    getAuthority(user?.email).then((data) => {
      setUserRole(data?.role);
      setRoleLoading(false);
    });
  }, [user]);

  if (loading || roleLoding) {
    return <CenterSpinner />;
  }

  if (user && userRole === "admin") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminPrivateRoute;
