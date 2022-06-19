// Imports
import AuthService from "../services/auth.service";

export const logIn = (email, password) => (dispatch) => {
  return AuthService.login(email, password)
    .then((response) => {
      const user = response.user;
      const token = response.access_token;

      // Set login successful
      dispatch({
        type: "AUTH_SUCCESS",
        payload: {
          user: user,
          token: token,
        },
      });

      // Clear the error
      dispatch({
        type: "CLEAR_ERROR",
      });
    })
    .catch((error) => {
      const message = error.response.data.message
        ? error.response.data.message
        : error.message;

      dispatch({
        type: "LOGIN_FAIL",
        payload: message,
      });
    });
};

export const logOut = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: "DESTROY_SESSION",
  });
};

export const register = (name, email, password) => (dispatch) => {
  return AuthService.register(name, email, password)
    .then((response) => {
      const token = response.access_token;
      const user = response.user;

      // Set register successful
      dispatch({
        type: "AUTH_SUCCESS",
        payload: {
          user: user,
          token: token,
        },
      });

      // Clear the error
      dispatch({
        type: "CLEAR_ERROR",
      });
    })
    .catch((error) => {
      const message = error.response.data.message
        ? error.response.data.message
        : error.message;

      dispatch({
        type: "AUTH_FAIL",
        payload: message,
      });
    });
};
