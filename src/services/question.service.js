import axios from "axios";
import { URL } from "../globals/network";
import authHeader from "./auth-header";

const getAllQuestions = () => {
  return axios.get(`${URL}/questions`, { headers: authHeader() });
};

const getQuestion = (id) => {
  return axios.get(`${URL}/questions/${id}`, { headers: authHeader() });
};

const addQuestion = (question) => {
  return axios.put(`${URL}/questions`, question, {
    headers: authHeader(),
  });
};

const deleteQuestion = (id) => {
  return axios.delete(`${URL}/questions`, { headers: authHeader() });
};

export default {
  getAllQuestions,
  getQuestion,
  addQuestion,
  deleteQuestion,
};
