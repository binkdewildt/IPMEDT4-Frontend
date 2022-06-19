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
        <h1 className="orange-text text text-align-center">Titel</h1>
        <p className="text-align-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
