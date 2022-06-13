import axios from "axios";
import { URL } from "../globals/network";
import authHeader from "./auth-header";

const getMe = () => {
  return axios.get(`${URL}/me`, { headers: authHeader() });
};

export default {
  getMe,
};
