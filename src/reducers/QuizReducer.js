const initialState = {
  finished: false,
  fetchedLast: false,
  active: false,
  current: 0,
  score: 0,
  showInfo: true,
};

export const QuizReducer = (state = initialState, action) => {
  switch (action.type) {
    // Start the quiz
    case "START_QUIZ":
      return {
        ...state,
        active: true,
      };

    // Stop the quiz
    case "STOP_QUIZ":
      return {
        ...state,
        active: false,
      };

    // Go to the next question
    case "NEXT_QUESTION":
      return {
        ...state,
        current: state.current + 1,
      };

    // Add the current score
    case "ADD_SCORE":
      return {
        ...state,
        score: state.score + action.payload,
      };

    // Fetched the last score
    case "FETCHED_LAST":
      return {
        ...state,
        fetchedLast: true,
      };

    // Set the current question
    case "SET_CURRENT":
      return {
        ...state,
        current: action.payload,
      };

    // Set the last quiz
    case "SET_LAST_QUIZ":
      return {
        ...state,
        fetchedLast: true,
        finished: action.payload.finished,
        current: action.payload.question,
        score: action.payload.score,
      };

    // Finished the quiz
    case "SET_FINISHED":
      return {
        ...state,
        finished: true,
      };

    case "END_QUIZ":
      return {
        ...state,
        finished: false,
        current: 0,
        score: 0,
      };

    case "HIDE_INFO":
      return {
        ...state,
        showInfo: false,
      }

    default:
      return state;
  }
};
