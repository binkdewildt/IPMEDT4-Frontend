import React from "react";
import { NavLink } from "react-router-dom";

import "./AdminStartpage.css";

export const AdminStartpage = () => {
  return (
    <section className="adminStartpageWrapper">
      <section className="succesMessage">
        <h2 className="text-align-center h2-mobile"> 👍 De vraag is succesvol toegevoegd </h2>
      </section>
      <h1 className="text-align-center"> Admin </h1>
      <p className="text-align-center"> Voeg een vraag toe </p>
      <section className="sectionAdminOptions">
        <NavLink className="adminOptionButton" to="/dashboard/addMcQuestion">
          <img
            src="/img/closed-question.png"
            className="adminButtonImg"
            alt="Multiple Choice Questions"
          />
          <p className="text-align-center"> Gesloten vraag </p>
        </NavLink>

        <NavLink className="adminOptionButton" to="/dashboard/addOpenQuestion">
          <img
            src="/img/open-question.png"
            className="adminButtonImg"
            alt="Open Questions"
          />
          <p className="text-align-center"> Open vraag </p>
        </NavLink>
      </section>
    </section>
  );
};
