import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { endQuiz, finishQuiz } from "../../../actions/QuizActions";
import "./FinishedQuiz.css";

export const FinishedQuiz = () => {
  //* Variables
  const score = useSelector((state) => state.quiz.score);

  //* Inits
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //* Functions
  const end = () => {
    dispatch(endQuiz());
    navigate("/");
  };

  //* Component
  return (
    <section className="questionWrapper">
      <section className="flex-center">
        <h1 className="text-align-center"> Je hebt alle vragen beantwoord! </h1>
        <p className="text-align-center"> Je hebt een totaal score van: </p>
        <h2 className="text-align-center orange-text"> {score} </h2>
        <button
          type="button"
          onClick={() => end()}
          className="primary-button-style-2 margin-top">
          Terug naar het dashboard
        </button>
      </section>
    </section>
  );
};
