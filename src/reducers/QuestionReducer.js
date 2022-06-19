const initialState = {
  allQuestions: [
    // {
    //   id: 1,
    //   question: "Dit is de vraag die de gebruiker te zien krijgt",
    //   mcQuestion: false,
    //   answerA: "Eerste antwoord",
    //   answerB: "Antwoord B",
    //   answerC: "Antwoord C",
    //   answerD: "Antwoord D",
    //   reason: "Reden van het goede antwoord",
    //   correctAnswer: "Testen",
    //   points: 10,
    // },
    // {
    //   id: 2,
    //   question: "Tweede vraag",
    //   mcQuestion: true,
    //   answerA: "Eerste antwoord",
    //   answerB: "Antwoord B",
    //   answerC: "Antwoord C",
    //   answerD: "Antwoord D",
    //   reason: "Reden van het goede antwoord",
    //   correctAnswer: "A",
    //   points: 10,
    // },
    // {
    //   id: 2,
    //   question: "Tweede vraag",
    //   mcQuestion: true,
    //   answerA: "Eerste antwoord",
    //   answerB: "Antwoord B",
    //   answerC: "Antwoord C",
    //   answerD: "Antwoord D",
    //   reason: "Reden van het goede antwoord",
    //   correctAnswer: "A",
    //   points: 10,
    // },
  ],
  fetched: false,
  requested: false,
  total: 0,
};

export const QuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_QUESTIONS":
      return {
        ...state,
        allQuestions: action.payload,
        fetched: true,
        total: action.payload.length,
      };

    case "SET_TOTAL":
      return {
        ...state,
        total: action.payload,
      };

    // Request the questions from the server
    case "REQUEST_QUESTIONS":
      return {
        ...state,
        requested: true,
      };

    // Confirmed the request
    case "RECEIVED_QUESTIONS":
      return {
        ...state,
        requested: false,
        fetched: true,
      };

    // Add a new question
    case "ADD_QUESTION":
      return {
        ...state,
        allQuestions: [...state.allQuestions, action.payload],
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
