// Imports
import AuthService from "../services/auth.service";

export const logIn = (email, password) => (dispatch) => {
  return AuthService.login(email, password)
    .then((response) => {
      const userObj = {
        email: email,
        password: password,
      };
      const token = response.access_token;

      // Set login successful
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: userObj,
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

export const logOut = () => {
  return AuthService.logout();
};

export const register = (username, email, password) => (dispatch) => {};

export const checkIfLoggedIn = () => {
  return sessionStorage.getItem("access_token");
};
