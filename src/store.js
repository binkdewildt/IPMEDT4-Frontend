import { configureStore } from "@reduxjs/toolkit";

// Reducers
import { QuestionReducer } from "./reducers/QuestionReducer";
import { SessionReducer } from "./reducers/SessionReducer";
import { QuizReducer } from "./reducers/QuizReducer";

export const store = configureStore({
  reducer: {
    questions: QuestionReducer,
    session: SessionReducer,
    quiz: QuizReducer,
  },
});
