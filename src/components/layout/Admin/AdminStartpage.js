import React from "react";

import "./AdminStartpage.css";

export const AdminStartpage = () => {
  return (
    <section className="adminStartpageWrapper">
        <h1 className="text-align-center"> Admin </h1>
        <p className="text-align-center"> Voeg een vraag toe </p>
        <section className="sectionAdminOptions">
          <section className="adminOptionButton">
            <img src="/img/closed-question.png" className="adminButtonImg"></img>
            <p className="text-align-center"> Gesloten vraag </p>
          </section>
          <section className="adminOptionButton">
            <img src="/img/open-question.png" className="adminButtonImg"></img>
            <p className="text-align-center"> Open vraag </p>
          </section>
        </section>
    </section>
  );
};