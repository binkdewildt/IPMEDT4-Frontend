import { type } from "@testing-library/user-event/dist/type";
import QuestionService from "../services/question.service";

export const getAllQuestions = () => (dispatch) => {
  dispatch({ type: "REQUEST_QUESTIONS" });
  return QuestionService.getAllQuestions()
    .then((response) => {
      // Set all the questions
      dispatch({
        type: "SET_ALL_QUESTIONS",
        payload: response.data,
      });

      // Clear the error
      dispatch({
        type: "CLEAR_ERROR",
      });

      dispatch({ type: "RECEIVED_QUESTIONS" });
    })
    .catch((error) => {
      const message = error.response.data.message
        ? error.response.data.message
        : error.message;

      dispatch({
        type: "SET_ERROR",
        payload: message,
      });
    });
};

export const addOpenQuestion = (question, answer, reason) => (dispatch) => {
  const questionBody = {
    question: question,
    mcQuestion: false,
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
    reason: reason,
    correctAnswer: answer,
    points: 10,
  };
  return QuestionService.addQuestion(questionBody).then((response) => {
    dispatch({
      type: "ADD_QUESTION",
      payload: questionBody,
    });
  });
};

export const addMcQuestion =
  (
    question,
    answerA,
    answerB,
    answerC,
    answerD,
    answerAmount,
    correctAnswer,
    reason
  ) =>
  (dispatch) => {
    const questionBody = {
      question: question,
      mcQuestion: false,
      answerA: answerA,
      answerB: answerB,
      answerC: answerAmount >= 3 ? answerC : "",
      answerD: answerAmount >= 4 ? answerD : "",
      reason: reason,
      correctAnswer: correctAnswer,
      points: 10,
    };

    return QuestionService.addQuestion(questionBody).then((response) => {
      dispatch({
        type: "ADD_QUESTION",
        payload: questionBody,
      });
    });
  };
