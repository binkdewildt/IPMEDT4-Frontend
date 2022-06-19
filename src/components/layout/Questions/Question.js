import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

// Functions
import { nextQuestion, finishQuiz } from "../../../actions/QuizActions";

export const Question = ({ question }) => {
  //* Variables
  const [openAnswer, setOpenAnswer] = useState("");
  const [answered, setAnswered] = useState(false);
  const totalQuestion = useSelector(
    (state) => state.questions.allQuestions.length
  );
  const current = useSelector((state) => state.quiz.currentQuestion);

  //* Inits
  const dispatch = useDispatch();

  // Functions
  const checkAnswer = (chosen) => {
    // Check if not already answered
    if (answered) {
      return;
    }

    // Correct, add the score
    if (chosen === question.correctAnswer) {
      dispatch({ type: "ADD_SCORE", payload: question.points });
    }

    setAnswered(true);
  };

  const next = () => {
    setOpenAnswer("");
    setAnswered(false);

    // Check if it was the last question
    if (current === totalQuestion - 1) {
      dispatch(finishQuiz());
    }

    dispatch(nextQuestion());
  };

  // Return
  return (
    <>
      <section className="imgWrapperQuestion">
        <img
          src="/img/question-mark.png"
          className="questionImg"
          alt="Questionmark"
        />
      </section>
      <section className="questionWrapperGrid">
        <section className="sectionLeftQuestion">
          <h1 className="orange-text text-align-center">Vraag</h1>
          <p className="text-align-center">{question.question}</p>
        </section>

        {question.mcQuestion ? (
          <section className="sectionRightQuestion">
            {question.answerA && (
              <button
                onClick={() => checkAnswer("A")}
                className={`answer-button ${
                  answered &&
                  (question.correctAnswer === "A"
                    ? "correct-answer-button"
                    : "wrong-answer-button")
                }`}>
                {question.answerA}
              </button>
            )}
            {question.answerB && (
              <button
                onClick={() => checkAnswer("B")}
                className={`answer-button ${
                  answered &&
                  (question.correctAnswer === "B"
                    ? "correct-answer-button"
                    : "wrong-answer-button")
                }`}>
                {question.answerB}
              </button>
            )}
            {question.answerC && (
              <button
                onClick={() => checkAnswer("C")}
                className={`answer-button ${
                  answered &&
                  (question.correctAnswer === "C"
                    ? "correct-answer-button"
                    : "wrong-answer-button")
                }`}>
                {question.answerC}
              </button>
            )}
            {question.answerD && (
              <button
                onClick={() => checkAnswer("D")}
                className={`answer-button ${
                  answered &&
                  (question.correctAnswer === "D"
                    ? "correct-answer-button"
                    : "wrong-answer-button")
                }`}>
                {question.answerD}
              </button>
            )}
          </section>
        ) : (
          <section className="sectionRightQuestion">
            <label htmlFor="answer" className="inputLabel">
              Antwoord:
            </label>
            <input
              type="text"
              id="answer"
              value={openAnswer}
              onChange={(e) => setOpenAnswer(e.target.value)}
              autoComplete="off"
            />

            {!answered && (
              <button
                type="button"
                onClick={() => {
                  checkAnswer(openAnswer);
                }}
                className="primary-button-style-2">
                Controleren
              </button>
            )}
          </section>
        )}
      </section>
      {answered && (
        <section className="sectionExplain">
          <p className="sectionExplainReason"> {question.reason}</p>
          <button onClick={() => next()} className="primary-button-style-2">
            Ga verder
          </button>
        </section>
      )}
    </>
  );
};
