const initialState = {
  token: "",
  loggedIn: false,
  user: {
    name: "",
    email: "",
    permissions: "",
  },
  errorMessage: "",
};

export const SessionReducer = (state = initialState, action) => {
  switch (action.type) {
    // Auth is successful
    case "AUTH_SUCCESS":
      return {
        errorMessage: "",
        user: action.payload.user,
        loggedIn: true,
        token: action.payload.token,
      };

    // Auth has failed
    case "AUTH_FAIL":
      return {
        ...state,
        errorMessage: action.payload,
      };

    // Clears the login error
    case "CLEAR_AUTH_ERROR":
      return {
        ...state,
        errorMessage: "",
      };

    case "SET_SESSION":
      return action.payload;

    default:
      return state;
  }
};
