import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllQuestions } from "../../../actions/QuestionActions";

import "./Question.css";

export const QuestionsList = () => {
  const allQuestions = useSelector((state) => state.questions.allQuestions);
  const dispatch = useDispatch();
  return (
    <section className="questionWrapper">
      <section className="imgWrapperQuestion">
        <img src="/img/question-mark.png" className="questionImg"/>
      </section>
      <section className="questionWrapperGrid">
        <section className="sectionLeftQuestion">
            {/* <button onClick={() => dispatch(getAllQuestions())}> GetAll </button> */}
            <h1 className="orange-text text-align-center">Vraag</h1>

            {allQuestions.map((question) => (
              <p className="text-align-center" key={question.id}> {question.question}</p>
            ))}
        </section>
        <section className="sectionRightQuestion">
          <button className="answer-button">Antwoord 1</button>
          <button className="answer-button">Antwoord 2</button>
          <button className="answer-button">Antwoord 3</button>
          <button className="answer-button">Antwoord 4</button>
        </section>
      </section>
    </section>
  );
};
