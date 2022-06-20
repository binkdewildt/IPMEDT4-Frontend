// Reducers
import { QuestionReducer } from "./QuestionReducer";
import { SessionReducer } from "./SessionReducer";
import { QuizReducer } from "./QuizReducer";
import MessageReducer from "./MessageReducer";

import { combineReducers } from "redux";

const appReducer = combineReducers({
  message: MessageReducer,
  session: SessionReducer,
  quiz: QuizReducer,
  questions: QuestionReducer,
});

const rootReducer = (state, action) => {
  // Clear all the data in redux store to initial
  if (action.type === "DESTROY_SESSION") state = undefined;
  return appReducer(state, action);
};

export default rootReducer;
