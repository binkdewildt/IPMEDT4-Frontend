import axios from "axios";
import authHeader from "../services/auth-header";
import { URL } from "../globals/network";

/**
 * Start the quiz by fetching all the questions and then dispatching the START_QUIZ action.
 */
export const startQuiz = () => (dispatch) => {
  // Start the quiz
  dispatch({
    type: "START_QUIZ",
  });
};

/**
 * When the user clicks the stop button, stop the quiz.
 */
export const stopQuiz = () => (dispatch) => {
  // Stop the quiz
  dispatch({
    type: "STOP_QUIZ",
  });
};

/**
 * When the user clicks the 'End Quiz' button, end the quiz.
 */
export const endQuiz = () => (dispatch) => {
  // End the quiz
  dispatch({
    type: "END_QUIZ",
  });
};

export const setScore = (scoreToAdd) => (dispatch) => {
  dispatch({
    type: "ADD_SCORE",
    payload: scoreToAdd,
  });
};

export const nextQuestion = () => (dispatch) => {
  // Update the component
  dispatch({ type: "NEXT_QUESTION" });

  // Send to the server
  axios.put(`${URL}/scores`, { headers: authHeader() }).then((response) => {
    console.log(response);
  });
};

export const finishQuiz = () => (dispatch) => {
  dispatch({ type: "SET_FINISHED" });
};

export const getLastQuiz = () => (dispatch) => {
  return axios
    .get(`${URL}/scores/last`, { headers: authHeader() })
    .then((response) => {
      if (response.data.length === 0) {
        return;
      }
      dispatch({ type: "SET_TOTAL", payload: response.data.total });

      dispatch({ type: "SET_LAST_QUIZ", payload: response.data });
    });
};
