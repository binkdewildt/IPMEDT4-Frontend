import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { startQuiz, getLastQuiz } from "../../../actions/QuizActions";

import "./Learnpath.css";

export const Learnpath = () => {
  //* Selectors
  const username = useSelector((state) => state.session.user.name);
  const current = useSelector((state) => state.quiz.current);
  const fetched = useSelector((state) => state.quiz.fetchedLast);
  const finished = useSelector((state) => state.quiz.finished);

  //* Inits
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //* Functions
  const start = () => {
    // Start the quiz
    dispatch(startQuiz());
    navigate("/quiz");
  };

  //* Effects
  useEffect(() => {
    if (!fetched) {
      dispatch(getLastQuiz());
    }
  }, []);

  //* Component
  return (
    <section className="learnpathWrapper">
      <section className="sectionLeftLearnpath text-align-center">
        <h1 className="h1-style">Leuk dat je er bent,</h1>
        <h1 className="h1-style" style={{textTransform: 'capitalize'}}>{username}</h1>
        <button onClick={() => start()} className="primary-button-style-2">
          {current === 0 && finished
            ? "Nieuwe zelfstudie"
            : "Hervat zelfstudie"}
        </button>
      </section>
      <section className="sectionRightLearnpath">
        <img src="/img/roadmap.png" className="roadmapImg" alt="Roadmap"></img>
      </section>
    </section>
  );
};
