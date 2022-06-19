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

export const getQuestion = (id) => (dispatch) => {};

export const addQuestion =
  ({ props }) =>
  (dispatch) => {};

export const deleteQuestion = (id) => (dispatch) => {};
