import React from "react";
import { useSelector } from "react-redux/es/exports";
import "./ProgressBar.css";

export const ProgressBar = () => {
  // const progress =
  //   (useSelector((state) => state.quiz.current) /
  //     useSelector((state) => state.questions.total)) *
  //   100;

  const progress = useSelector((state) =>
    state.quiz.currentQuestion === 0
      ? 0
      : (state.quiz.currentQuestion / state.questions.total) * 100
  );

  return (
    <footer>
      <p>Progressie</p>
      <div className="progressBar">
        <div
          className="progressBarProgress"
          style={{ width: `${progress}%`, maxWidth: "100%" }}></div>
      </div>
    </footer>
  );
};

export default ProgressBar;
