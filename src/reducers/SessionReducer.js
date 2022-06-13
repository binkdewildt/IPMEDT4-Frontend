import { checkIfLoggedIn } from "../actions/SessionActions";

const initialState = {
  token: checkIfLoggedIn(),
  loggedIn: checkIfLoggedIn() !== "",
  user: {
    permissions: "",
    username: "",
    email: "",
  },
  errorMessage: "",
};

export const SessionReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login is successful
    case "LOGIN_SUCCESS":
      return {
        errorMessage: "",
        user: action.payload.user,
        loggedIn: true,
        token: action.payload.token,
      };

    // Login has failed
    case "LOGIN_FAIL":
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
