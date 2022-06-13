import React from "react";

export const Question = ({ question }) => {
  return (
    <li>
      <h1> {question.question} </h1>
    </li>
  );
};
