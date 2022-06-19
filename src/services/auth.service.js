// Imports
import axios from "axios";

// Constants
import { URL } from "../globals/network";

const login = (email, password) => {
  return axios
    .post(`${URL}/login`, {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.data.user && response.data.access_token) {
        // sessionStorage.setItem("access_token", response.data.access_token);
        setSessionStorage(response.data.user, response.data.access_token);
      }

      return response.data;
    });
};

const register = (name, email, password) => {
  return axios
    .post(`${URL}/register`, {
      name: name,
      email: email,
      password: password,
    })
    .then((response) => {
      if ("access_token" in response.data) {
        // sessionStorage.setItem("access_token", response.data.access_token);
        setSessionStorage(response.data.user, response.data.access_token);
      }

      return response.data;
    });
};

const logout = () => {
  if (sessionStorage.getItem("session")) {
    sessionStorage.removeItem("session");
  }
};

const setSessionStorage = (user, token) => {
  const session = {
    token: `Bearer ${token}`,
    loggedIn: true,
    user: user,
    errorMessage: "",
  };
  sessionStorage.setItem("session", JSON.stringify(session));
};

export default {
  register,
  login,
  logout,
};
