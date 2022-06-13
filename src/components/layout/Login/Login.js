import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../actions/SessionActions";

export const Login = () => {
  const [email, setEmail] = useState("normal@gmail.com");
  const [password, setPassword] = useState("normal123");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(logIn(email, password));
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email"> Uw email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Vul uw email adres in"
      />

      <label htmlFor="password"> Uw wachtwoord</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Vul uw wachtwoord in"
      />

      <button type="submit"> Verzenden </button>
    </form>
  );
};
