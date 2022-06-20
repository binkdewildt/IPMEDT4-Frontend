import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import QuestionService from "../../../services/question.service";

import "./AdminAddQuestion.css";

export const AdminAddMultipleChoice = () => {
  //* Variables
  const [question, setQuestion] = useState("");
  const [answerA, setAnswerA] = useState("");
  const [answerB, setAnswerB] = useState("");
  const [answerC, setAnswerC] = useState("");
  const [answerD, setAnswerD] = useState("");
  const [answerAmount, setAnswerAmount] = useState(2);
  const [correctAnswer, setCorrectAnswer] = useState("");
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
    } else if (!correctAnswer) {
      setError("Kies een antwoord die juist is");
      return;
    }

    setError("");

    // Add the question
    const questionBody = {
      mcQuestion: true,
      question: question,
      answwerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      correctAnswer: correctAnswer,
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

  const addAnswer = () => {
    setAnswerAmount(answerAmount + 1);
  };

  const deleteAnswer = (answer) => {
    // Check if answer D needs to be put to C
    if (answer === 3 && answerAmount > 3) {
      setAnswerC(answerD);
      setAnswerD();
    }
    setAnswerAmount(answerAmount - 1);
    return;
  };

  //* Component
  return (
    <section className="AdminAddQuestion">
      <h1 className="text-align-center h1-style-ignore">
        Gesloten vraag toevoegen
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
            <label className="bigger-font-size margin-top">De antwoorden</label>
            <p> Minimaal 2, maximaal 4 </p>
          </section>

          <section>
            <label htmlFor="answerA" className="bigger-font-size">
              Antwoord A:
            </label>
            <input
              id="answerA"
              value={answerA}
              onChange={(e) => setAnswerA(e.target.value)}
            />
            <section className="sectionAnswerOptions">
              <button
                type="button"
                onClick={() => setCorrectAnswer("A")}
                className={`secondary-button-style-2-borderless ${
                  correctAnswer === "A" && "selected"
                }`}>
                ✔️
                {correctAnswer === "A"
                  ? "Gemarkeerd als juiste antwoord"
                  : "Markeer als juiste antwoord"}
              </button>
            </section>
          </section>

          <section>
            <label htmlFor="answerB" className="bigger-font-size">
              Antwoord B:
            </label>
            <input
              id="answerB"
              value={answerB}
              onChange={(e) => setAnswerB(e.target.value)}
            />
            <section className="sectionAnswerOptions">
              <button
                type="button"
                onClick={() => setCorrectAnswer("B")}
                className={`secondary-button-style-2-borderless ${
                  correctAnswer === "B" && "selected"
                }`}>
                ✔️
                {correctAnswer === "B"
                  ? "Gemarkeerd als juiste antwoord"
                  : "Markeer als juiste antwoord"}
              </button>
            </section>
          </section>

          {answerAmount >= 3 && (
            <>
              <section>
                <label htmlFor="answerC" className="bigger-font-size">
                  Antwoord C:
                </label>
                <input
                  id="answerC"
                  value={answerC}
                  onChange={(e) => setAnswerC(e.target.value)}
                />
                <section className="sectionAnswerOptions">
                  <button
                    type="button"
                    onClick={() => setCorrectAnswer("C")}
                    className={`secondary-button-style-2-borderless ${
                      correctAnswer === "C" && "selected"
                    }`}>
                    ✔️
                    {correctAnswer === "C"
                      ? "Gemarkeerd als juiste antwoord"
                      : "Markeer als juiste antwoord"}
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteAnswer(3)}
                    className="secondary-button-style-2-borderless red-text">
                    🗑️ Verwijder antwoord
                  </button>
                </section>
              </section>
            </>
          )}

          {answerAmount >= 4 && (
            <>
              <section>
                <label htmlFor="answerD" className="bigger-font-size">
                  Antwoord D:
                </label>
                <input
                  id="answerD"
                  value={answerD}
                  onChange={(e) => setAnswerD(e.target.value)}
                />
                <section className="sectionAnswerOptions">
                  <button
                    type="button"
                    onClick={() => setCorrectAnswer("D")}
                    className={`secondary-button-style-2-borderless ${
                      correctAnswer === "D" && "selected"
                    }`}>
                    ✔️
                    {correctAnswer === "D"
                      ? "Gemarkeerd als juiste antwoord"
                      : "Markeer als juiste antwoord"}
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteAnswer(4)}
                    className="secondary-button-style-2-borderless red-text">
                    🗑️ Verwijder antwoord
                  </button>
                </section>
              </section>
            </>
          )}

          <section>
            <label htmlFor="reason" className="bigger-font-size">
              De reden:
            </label>
            <input
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </section>

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
