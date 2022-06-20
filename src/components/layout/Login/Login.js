import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../actions/SessionActions";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin123");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.session.errorMessage);

  const onSubmit = (e) => {
    e.preventDefault();

    // Check if all the fields are filled in
    if (!email || !password) {
      dispatch({
        type: "AUTH_FAIL",
        payload: "Vul alle velden in.",
      });

      return;
    }

    // Success
    dispatch(logIn(email, password));
  };

  useEffect(() => {
    dispatch({ type: "CLEAR_AUTH_ERROR" });
  }, []);

  if (useSelector((state) => state.session.loggedIn)) {
    return <Navigate to="/" />;
  }

  return (
    <section className="loginWrapper">
      <section className="sectionLeft">
        <img
          src="/img/academic-cap.png"
          className="loginImg desktop-only"
          alt="Cap"
        />
        <p className="secondary-text-color"> PostNL elearning </p>
        <h1 className="main-text-color"> Equal flow exportbaan </h1>
      </section>
      <section className="sectionRight">
        <h1 className="main-text-color desktop-only"> Inloggen </h1>

        {error && (
          <section className="sectionError">
            <img src="/img/exclamation.png" className="errorImg" alt="Error" />
            <p> {error} </p>
          </section>
        )}

        <form onSubmit={onSubmit}>
          <label htmlFor="email"> Email: </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Vul uw email adres in"
          />

          <label htmlFor="password"> Wachtwoord: </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Vul uw wachtwoord in"
          />

          <section className="formButtonSection">
            <button type="submit" className="primary-button-style-1">
              Inloggen
            </button>

            <button
              type="button"
              className="a"
              onClick={() => navigate("/register")}>
              Nieuw account aanmaken
            </button>
          </section>
        </form>
      </section>
    </section>
  );
};
