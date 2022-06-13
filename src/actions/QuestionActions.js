import QuestionService from "../services/question.service";

export const getAllQuestions = () => (dispatch) => {
  return QuestionService.getAllQuestions()
    .then((response) => {
      dispatch({
        type: "SET_ALL_QUESTIONS",
        payload: response.data,
      });

      dispatch({
        type: "CLEAR_ERROR",
      });
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

export const getQuestion = (id) => (dispatch) => {};

export const addQuestion =
  ({ props }) =>
  (dispatch) => {};

export const deleteQuestion = (id) => (dispatch) => {};
