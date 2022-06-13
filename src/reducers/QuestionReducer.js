const initialState = {
  allQuestions: [
    {
      id: 1,
      question: "Dit is de vraag die de gebruiker te zien krijgt",
      mcQuestion: true,
      answerA: "Antwoord A",
      answerB: "Antwoord B",
      answerC: "Antwoord C",
      answerD: "Antwoord D",
      reason: "Reden van het goede antwoord",
      correctAnswer: "A",
      points: 120,
    },
  ],
  questionsRequested: false,
};

export const QuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_QUESTIONS":
      return {
        allQuestions: action.payload,
        questionsRequested: false,
      };

    // Request the questions from the server
    case "REQUEST_QUESTIONS":
      return {
        ...state,
        questionsRequested: true,
      };

    // Confirmed the request
    case "RECEIVED_QUESTIONS":
      return {
        ...state,
        questionsRequested: false,
      };

    // Add a new question
    case "ADD_QUESTION":
      return {
        ...state,
        allQuestions: [action.payload, ...state.allQuestions],
      };

    // Delete a question
    case "DELETE_QUESTION":
      return {
        ...state,
        allQuestions: state.allQuestions.filter(
          (question) => question.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
