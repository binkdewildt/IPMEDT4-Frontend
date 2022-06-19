// Reducers
import { QuestionReducer } from "./QuestionReducer";
import { SessionReducer } from "./SessionReducer";
import { QuizReducer } from "./QuizReducer";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  questions: QuestionReducer,
  session: SessionReducer,
  quiz: QuizReducer,
});

const rootReducer = (state, action) => {
  // Clear all the data in redux store to initial
  if (action.type === "DESTROY_SESSION") state = undefined;
  return appReducer(state, action);
};

export default rootReducer;
