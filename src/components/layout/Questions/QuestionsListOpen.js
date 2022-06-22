import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllQuestions } from "../../../actions/QuestionActions";

import "./Question.css";

export const QuestionsListOpen = () => {
  const allQuestions = useSelector((state) => state.questions.allQuestions);
  const dispatch = useDispatch();
  return (
    <section className="questionWrapper">
      <section className="imgWrapperQuestion">
        <img src="/img/question-mark.png" className="questionImg" />
      </section>
      <section className="questionWrapperGrid">
        <section className="sectionLeftQuestion">
          {/* <button onClick={() => dispatch(getAllQuestions())}> GetAll </button> */}
          <h1 className="orange-text text-align-center">Vraag</h1>

          {allQuestions.map((question) => (
            <p className="text-align-center" key={question.id}>
              {" "}
              {question.question}
            </p>
          ))}
        </section>
        <section className="sectionRightQuestion">
            <p> Vul een antwoord in. </p>
          <label for="answer" className="inputLabel">
            Antwoord:
          </label>
          <input type="text" name="answer" />
          <button className="primary-button-style-2"> Ga verder </button>
        </section>
      </section>
    </section>
  );
};
