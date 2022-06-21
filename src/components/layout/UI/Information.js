import React from "react";
import { useDispatch } from "react-redux";

import "./Information.css";

export const Information = () => {
  //* Inits
  const dispatch = useDispatch();

  return (
    <section className="informationWrapper">
      <img src="/img/info.png" className="questionImg" alt="Information"></img>
      <section className="sectionInformationText">
        <h1 className="orange-text text text-align-center">Welkom!</h1>
        <p className="text-align-center">
          Leuk dat je de PostNL Equal Flow loopbaan elearning gaat volgen! 
          Deze elearning heeft als doel je wat bij te leren over een 'Equal flow' op de exportbaan in het distributiecentrum.
          De elearning bestaat uit een aantal vragen omtrent het behouden van een 'Equal flow' op de exportbaan. Hoe verdeel je je personeel het beste? Wat te doen als je personeel te kort komt?
          Na deze elearning zal je een beter beeld hebben over deze 'Equal flow'.
          Na het beantwoorden van een vraag, wordt het juiste antwoord groen en kun je onder de vraag zien waarom dat het juiste antwoord is.
          Bij een goed antwoord krijg je punten. Je totaal score zie je linksboven. Daarnaast kun je altijd je progressie zien in de balk onderaan.
          Je kan tussentijds stoppen met de elearning, je progressie wordt automatisch opgeslagen.
          Veel plezier en succes tijdens deze elearning!
        </p>
      </section>
      <button
        onClick={() => dispatch({ type: "HIDE_INFO" })}
        className="primary-button-style-2 margin-top">
        Begrepen
      </button>
    </section>
  );
};
