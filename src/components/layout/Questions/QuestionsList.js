import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllQuestions } from "../../../actions/QuestionActions";

export const QuestionsList = () => {
  const allQuestions = useSelector((state) => state.questions.allQuestions);
  const dispatch = useDispatch();
  return (
    <ul>
      <button onClick={() => dispatch(getAllQuestions())}> GetAll </button>

      {allQuestions.map((question) => (
        <li key={question.id}> {question.question} </li>
      ))}
    </ul>
  );
};
