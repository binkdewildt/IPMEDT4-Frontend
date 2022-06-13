import axios from "axios";
import { URL } from "../globals/network";
import authHeader from "./auth-header";

const getAllQuestions = () => {
  return axios.get(`${URL}/questions`, { headers: authHeader() });
};

const getQuestion = (id) => {
  return axios.get(`${URL}/questions/${id}`, { headers: authHeader() });
};

const addQuestion = ({ props }) => {};

const deleteQuestion = (id) => {};

export default {
  getAllQuestions,
  getQuestion,
  addQuestion,
  deleteQuestion,
};
