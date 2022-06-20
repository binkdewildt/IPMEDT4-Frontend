import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";

// import { addOpenQuestion } from "../../../actions/QuestionActions";
import QuestionService from "../../../services/question.service";

import "./AdminAddQuestion.css";

export const AdminAddOpenQuestion = () => {
  //* Variables
  const [question, setQuestion] = useState("Testen vraag toevoegen");
  const [answer, setAnswer] = useState("12");
  const [reason, setReason] = useState("Is er niet");
  const [error, setError] = useState();

  //* Inits
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //* Functions
  const onSubmit = (e) => {
    e.preventDefault();

    // Check if they are both filled in
    if (!question || !answer) {
      setError("Vul alle velden in");
      return;
    }

    setError("");

    // Add the question
    const questionBody = {
      mcQuestion: false,
      question: question,
      answwerA: "",
      answerB: "",
      answerC: "",
      answerD: "",
      correctAnswer: answer,
      reason: reason,
      points: 10,
    };

    QuestionService.addQuestion(questionBody)
      .then((response) => {
        // Add the question
        dispatch({
          type: "ADD_QUESTION",
          payload: questionBody,
        });

        // Set the success message
        dispatch({
          type: "SET_SUCCESS",
          payload: "👍 De vraag is succesvol toegevoegd",
        });

        // Clear the message after 10 seconds
        setTimeout(() => {
          dispatch({ type: "CLEAR_SUCCESS" });
        }, 10_000);

        // Navigate back to the dashboard
        navigate("/dashboard");
      })
      .catch((error) => {
        let message = error.message;

        if (error.response.data.error) {
          if (error.response.data.error.question) {
            message = "Deze vraag bestaat al.";
          }
        }
        setError(message);
      });
  };

  return (
    <section className="AdminAddQuestion">
      <h1 className="text-align-center h1-style-ignore">
        Open vraag toevoegen
      </h1>

      {error && (
        <section className="sectionError width-fix">
          <img src="/img/exclamation.png" className="errorImg" alt="Error" />
          <p> {error} </p>
        </section>
      )}

      <form
        onSubmit={onSubmit}
        className="sectionQuestionInputFields"
        autoComplete="off">
        <label htmlFor="question" className="bigger-font-size">
          De vraag zelf:
        </label>
        <input
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Vul de vraag in"
        />
        <section className="sectionAnswers">
          <section>
            <label htmlFor="answer" className="bigger-font-size">
              Het antwoord:
            </label>
            <input
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Vul de vraag in"
            />
          </section>

          <section>
            <label htmlFor="reason" className="bigger-font-size">
              De reden:
            </label>
            <input
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Vul de vraag in"
            />
          </section>

          <section className="sectionButtonsAdmin">
            <button type="submit" className="primary-button-style-2">
              Vraag toevoegen
            </button>
          </section>
        </section>
      </form>
    </section>
  );
};
