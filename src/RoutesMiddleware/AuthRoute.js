import React from "react";
import { useSelector } from "react-redux/es/exports";
import { Navigate } from "react-router-dom";

const AuthRoute = (props) => {
  const loggedIn = useSelector((state) => state.session.loggedIn);

  // Checks
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return props.children;
};

export default AuthRoute;
