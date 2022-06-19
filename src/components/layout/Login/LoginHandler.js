import React, { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

import { Login } from "./Login";
import { Register } from "./Register";

export const LoginHandler = () => {
  const [loggingIn, setLoggingIn] = useState(true);

  const dispatch = useDispatch();

  const toggleLogin = () => {
    dispatch({ type: "CLEAR_AUTH_ERROR" });
    setLoggingIn(!loggingIn);
  };

  return (
    <>
      {loggingIn ? (
        <Login toggleLogin={toggleLogin} />
      ) : (
        <Register toggleLogin={toggleLogin} />
      )}
    </>
  );
};
