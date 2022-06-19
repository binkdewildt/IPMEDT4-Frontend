import React from "react";
import { useSelector } from "react-redux/es/exports";
import { Navigate } from "react-router-dom";

const AdminRoute = (props) => {
  const loggedIn = useSelector((state) => state.session.loggedIn);
  const admin = useSelector(
    (state) => state.session.user.permissions === "Admin"
  );

  // Checks
  if (!loggedIn) {
    return <Navigate to="/login" />;
  } else if (!admin) {
    return <Navigate to="/" />;
  }

  return props.children;
};

export default AdminRoute;
