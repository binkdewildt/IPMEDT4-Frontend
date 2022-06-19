import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { register } from "../../../actions/SessionActions";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState("nieuwe@gmail.com");
  const [firstname, setFirstname] = useState("nieuwe");
  const [password, setPassword] = useState("testen123");
  const [repeatPassword, setRepeatPassword] = useState("testen123");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.session.errorMessage);

  const onSubmit = (e) => {
    e.preventDefault();

    // Check if all the fields are filled in
    if (!email || !firstname || !password || !repeatPassword) {
      dispatch({
        type: "AUTH_FAIL",
        payload: "Vul alle velden in.",
      });

      return;
    }

    // Check if both passwords are the same
    else if (password !== repeatPassword) {
      dispatch({
        type: "AUTH_FAIL",
        payload: "Wachtwoorden komen niet overeen.",
      });

      return;
    }

    dispatch(register(firstname, email, password));
  };

  if (useSelector((state) => state.session.loggedIn)) {
    return <Navigate to="/" />;
  }

  return (
    <section className="loginWrapper">
      <section className="sectionLeft">
        <img
          src="/img/add-account.png"
          className="loginImg desktop-only"
          alt="Logging in"
        />
        <p className="secondary-text-color"> Equal flow exportbaan </p>
        <h1 className="main-text-color"> Account aanmaken </h1>
      </section>
      <section className="sectionRight">
        <h1 className="main-text-color desktop-only"> Registreren </h1>

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

          <label htmlFor="voornaam"> Voornaam: </label>
          <input
            id="voornaam"
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="Vul uw voornaam adres in"
          />

          <label htmlFor="password"> Wachtwoord: </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Vul uw wachtwoord in"
          />

          <label htmlFor="repeatPassword"> Wachtwoord herhalen: </label>
          <input
            id="repeatPassword"
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            placeholder="Vul uw wachtwoord in"
          />

          <section className="formButtonSection">
            <button type="submit" className="primary-button-style-1">
              Account aanmaken
            </button>

            <button
              type="button"
              className="a"
              onClick={() => navigate("/login")}>
              Ik heb al een account
            </button>
          </section>
        </form>
      </section>
    </section>
  );
};
