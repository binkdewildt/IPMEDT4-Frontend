const initialState = {
  // finished: false,
  // fetchedLast: false,
  // active: false,
  // current: 0,
  // score: 0,
  // showInfo: true,
  // hasPrev: false,

  showInfo: true,
  currentQuestion: 0,
  score: 0,
  inQuiz: false,
  id: null,
  hasPrev: false,
  fetchedPrev: false,
  finished: false,
};

export const QuizReducer = (state = initialState, action) => {
  switch (action.type) {
    // Start the quiz
    case "START_QUIZ":
      return {
        ...state,
        inQuiz: true,
      };

    // Stop the quiz
    case "STOP_QUIZ":
      return {
        ...state,
        inQuiz: false,
      };

    // Go to the next question
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
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
        fetchedPrev: true,
      };

    // Set the current question
    case "SET_CURRENT":
      return {
        ...state,
        currentQuestion: action.payload,
      };

    // Set the last quiz
    case "SET_LAST_QUIZ":
      return {
        ...state,
        id: action.payload.id,
        hasPrev: true,
        fetchedPrev: true,
        finished: action.payload.finished,
        currentQuestion: action.payload.question + 1,
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
        currentQuestion: 0,
        score: 0,
        id: null,
        showInfo: true,
      };

    case "HIDE_INFO":
      return {
        ...state,
        showInfo: false,
      };

    case "SET_ID":
      return {
        ...state,
        id: action.payload,
      };

    default:
      return state;
  }
};
