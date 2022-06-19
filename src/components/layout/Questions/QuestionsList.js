import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Components
import { Information } from "../UI/Information";
import { Loading } from "../UI/Loading";
import { FinishedQuiz } from "./FinishedQuiz";
import { Question } from "./Question";

// Functions
import { getAllQuestions } from "../../../actions/QuestionActions";

import "./Question.css";

export const QuestionsList = () => {
  //* Variables
  const requested = useSelector((state) => state.questions.requested);
  const fetched = useSelector((state) => state.questions.fetched);

  const started = useSelector((state) => state.quiz.inQuiz);
  const finished = useSelector((state) => state.quiz.finished);
  const showInfo = useSelector((state) => state.quiz.showInfo);
  const currentQuestion =
    useSelector(
      (state) => state.questions.allQuestions[state.quiz.currentQuestion]
    ) ?? null;

  //* Inits
  const naviate = useNavigate();
  const dispatch = useDispatch();

  //* Effects
  useEffect(() => {
    if (!started) {
      naviate("/");
    }

    if (started && !fetched && !requested) {
      console.log("Get all the question");
      dispatch(getAllQuestions());
    }
  }, []);

  if (showInfo) {
    return <Information />;
  }

  // If already requested
  if (requested || !fetched || !started) {
    return <Loading />;
  }

  // If finished
  if (finished) {
    return <FinishedQuiz />;
  }

  return (
    <section className="questionWrapper">
      <Question question={currentQuestion} />
    </section>
  );
};
