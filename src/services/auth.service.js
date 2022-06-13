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
      if (response.data.access_token) {
        sessionStorage.setItem("access_token", response.data.access_token);
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
      if (response.data.access_token) {
        sessionStorage.setItem("access_token", response.data.access_token);
      }

      return response.data;
    });
};

const logout = () => {
  if (sessionStorage.getItem("access_token")) {
    sessionStorage.removeItem("access_token");
  }
};

export default {
  register,
  login,
  logout,
};
