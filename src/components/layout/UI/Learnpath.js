import React from "react";

import "./Learnpath.css";

export const Learnpath = () => {
  return (
    <section className="learnpathWrapper">
        <section className="sectionLeftLearnpath text-align-center">
            <h1 className="h1-style">Leuk dat je er bent,</h1>
            <h1 className="h1-style">Gebruikersnaam!</h1>
            <button className="primary-button-style-2"> Hervat zelfstudie </button>
        </section>
        <section className="sectionRightLearnpath">
            <img src="/img/roadmap.png" className="roadmapImg"></img>
        </section>
    </section>
  );
};