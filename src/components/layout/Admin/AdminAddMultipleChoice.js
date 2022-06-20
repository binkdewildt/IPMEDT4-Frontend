import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { addMcQuestion } from "../../../actions/QuestionActions";

import "./AdminAddQuestion.css";

export const AdminAddMultipleChoice = () => {
  //* Variables
  const [question, setQuestion] = useState("Dit is de nieuwe vraag");
  const [answerA, setAnswerA] = useState("A");
  const [answerB, setAnswerB] = useState("B");
  const [answerC, setAnswerC] = useState("C");
  const [answerD, setAnswerD] = useState("D");
  const [answerAmount, setAnswerAmount] = useState(3);
  const [correctAnswer, setCorrectAnswer] = useState("A");
  const [error, setError] = useState("");
  const [reason, setReason] = useState("");

  //* Inits
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //* Functions
  const onSubmit = (e) => {
    e.preventDefault();

    // Check if all the fields are filled in
    if (!question || !answerA || !answerB) {
      setError("Vul alle velden in");
      return;
    } else if (answerAmount >= 3 && !answerC) {
      setError("Vul alle velden in");
      return;
    } else if (answerAmount >= 4 && !answerD) {
      setError("Vul alle velden in");
      return;
    }

    dispatch(
      addMcQuestion(
        question,
        answerA,
        answerB,
        answerC,
        answerD,
        answerAmount,
        correctAnswer,
        reason
      )
    );

    navigate("/dashboard");
  };

  const addAnswer = () => {
    setAnswerAmount(answerAmount + 1);
  };

  const deleteAnswer = () => {
    if (answerAmount === 4) {
      setAnswerD("");
    } else if (answerAmount === 3) {
      setAnswerC("");
    }
    setAnswerAmount(answerAmount - 1);
  };

  //* Component
  return (
    <section className="AdminAddQuestion">
      <h1 className="text-align-center h1-style-ignore">
        Gesloten vraag toevoegen
      </h1>

      {error && (
        <section className="sectionError">
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
          <label className="bigger-font-size margin-top">De antwoorden</label>
          <p> Minimaal 2, maximaal 4 </p>

          <label htmlFor="answerA" className="bigger-font-size">
            Antwoord A:
          </label>
          <input
            id="answerA"
            value={answerA}
            onChange={(e) => setAnswerA(e.target.value)}
          />

          <label htmlFor="answerB" className="bigger-font-size">
            Antwoord B:
          </label>
          <input
            id="answerB"
            value={answerB}
            onChange={(e) => setAnswerB(e.target.value)}
          />

          {answerAmount >= 3 && (
            <>
              <label htmlFor="answerC" className="bigger-font-size">
                Antwoord C:
              </label>
              <input
                id="answerC"
                value={answerC}
                onChange={(e) => setAnswerC(e.target.value)}
              />
            </>
          )}

          {answerAmount >= 4 && (
            <>
              <label htmlFor="answerD" className="bigger-font-size">
                Antwoord D:
              </label>
              <input
                id="answerD"
                value={answerD}
                onChange={(e) => setAnswerD(e.target.value)}
              />
            </>
          )}

          <label htmlFor="reason" className="bigger-font-size">
            De reden:
          </label>
          <input
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />

          <section className="sectionButtonsAdmin">
            <button
              type="button"
              onClick={addAnswer}
              className="secondary-button-style-2">
              Voeg antwoord toe
            </button>
            <hr className="line"></hr>
            <button type="submit" className="primary-button-style-2">
              Vraag toevoegen
            </button>
          </section>
        </section>
      </form>
    </section>
  );
};
