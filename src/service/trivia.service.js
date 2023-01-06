import axios from "axios";
import authHeader from "./auth-header2";
import authHeader2 from "./auth-header";
import { _API_URL } from "../configs";

const API_URL = _API_URL;
class TriviaService {
  createTrivia(TriviaForm) {
    return axios.post(API_URL + "createTrivia", TriviaForm, {
      headers: authHeader(),
    });
  }

  getTrivias() {
    return axios.get(API_URL + "getAllTrivia", { headers: authHeader() });
  }

  addQuestion(questionForm, triviaId) {
    return axios.post(API_URL + "addQuestion/" + triviaId, questionForm, {
      headers: authHeader(),
    });
  }

  getAllTrivias() {
    return axios.get(API_URL + "allTrivia", { headers: authHeader() });
  }

  getSingleTrivia(id) {
    return axios.get(API_URL + "getSingleTrivia/" + id, {
      headers: authHeader(),
    });
  }

  updateTrivia(id, payload) {
    return axios.patch(API_URL + "updateTrivia/" + id, payload, {
      headers: authHeader(),
    });
  }

  updateQuestions(id, payload) {
    return axios.patch(API_URL + "updateQuestion/" + id, payload, {
      headers: authHeader(),
    });
  }

  createPlayer(playerForm, triviaId) {
    return axios.post(API_URL + "createPlayer/" + triviaId, {
      email: playerForm.email,
      name: playerForm.name,
      phonenumber: playerForm.phonenumber,
      city: playerForm.city,
    });
  }

  answerTrivia(id, data) {
    return axios.post(API_URL + "trivia-answer/" + id, data);
  }

  contactUs(data) {
    return axios.post(API_URL + "contact-us/", data);
  }
}

export default new TriviaService();
