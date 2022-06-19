import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { endQuiz, finishQuiz } from "../../../actions/QuizActions";

export const FinishedQuiz = () => {
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
      You finished the quiz
      <button type="button" onClick={() => end()}>
        End quiz
      </button>
    </section>
  );
};
