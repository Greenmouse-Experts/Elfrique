import axios from "axios";
import authHeader from "./auth-header2";
import authHeader2 from "./auth-header";
import spHeader from "./super-authHeader";
import { _API_URL } from "../configs";

const API_URL = _API_URL;
//const API_URL = "http://localhost:3000/api/v1/";

class TransactionService {
  createVote(voteForm) {
    return axios.post(API_URL + "createVote", voteForm, {
      headers: authHeader(),
    });
  }

  makeTransaction(transactForm) {
    return axios.post(API_URL + "makeTransaction", transactForm);
  }

  submitVote(contestantId, voteForm) {
    return axios.post(API_URL + "vote/" + contestantId, voteForm, {});
  }

  getTransactionHistory() {
    return axios.get(API_URL + "getAllUserTransactions", {
      headers: authHeader(),
    });
  }
}

export default new TransactionService();
