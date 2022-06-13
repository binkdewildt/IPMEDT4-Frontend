import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../actions/SessionActions";

import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("normal@gmail.com");
  const [password, setPassword] = useState("normal123");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(logIn(email, password));
  };

  return (
    <section className="loginWrapper">
      <section className="sectionLeft">
        <img src="/img/academic-cap.png" className="loginImg desktop-only"></img>
        <p className="secondary-text-color"> PostNL elearning </p>
        <h1 className="main-text-color"> Equal flow exportbaan </h1>
      </section>
      <secton className="sectionRight">
        <h1 className="main-text-color desktop-only"> Inloggen </h1>
          <form onSubmit={onSubmit}>
            <label htmlFor="email"> Email: </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Vul uw email adres in"
            />

            <label htmlFor="password"> Wachtwoord: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Vul uw wachtwoord in"
            />

            <section className="formButtonSection">
              <button type="submit" className="primary-button-style-1"> Inloggen </button>
              <a href="/"> Nieuw account aanmaken </a>
            </section>
          </form>
      </secton>
    </section>
  );
};
