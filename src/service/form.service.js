import axios from "axios";
import authHeader from "./auth-header2";
import authHeader2 from "./auth-header";
import { _API_URL } from "../configs";

const API_URL = _API_URL;
class EventForm {
  createForm(eventForm) {
    return axios.post(API_URL + "createForm", eventForm, {
      headers: authHeader(),
    });
  }

  buildForm(questionForm, formId) {
    return axios.post(API_URL + "buildForm/" + formId, questionForm, {
      headers: authHeader(),
    });
  }

  /* createAward(awardForm) {
    return axios.post(API_URL + "createAward", awardForm, {
      headers: authHeader(),
    });
  } */

  getForms() {
    //forms by user
    return axios.get(API_URL + "getAllForms", { headers: authHeader() });
  }

  getFormsUser() {
    //forms by user
    return axios.get(API_URL + "getAllFormByUser", { headers: authHeader() });
  }

  buildForm(id, payload) {
    return axios.post(API_URL + "buildForm/" + id, payload, { headers: authHeader2() });
  }

  postResult(eventId, formId, payload) {
    return axios.post(API_URL + "recordResult/" + eventId + "/" + formId, payload, { headers: authHeader2() })
  }

  getContests() {
    return axios.get(API_URL + "getallVote", { headers: authHeader() });
  }

  createTickets(ticketForm, eventId) {
    return axios.post(API_URL + "createTickets/" + eventId, ticketForm, {
      headers: authHeader2(),
    });
  }

  getCategories(contestId) {
    return axios.get(API_URL + "getallCategories/" + contestId, {
      headers: authHeader(),
    });
  }

  addsponsor(sponsorForm, contestId) {
    return axios.post(API_URL + "addSponsor/" + contestId, sponsorForm, {
      headers: authHeader(),
    });
  }

  addInfo(infoForm, contestId) {
    return axios.post(API_URL + "addInfo/" + contestId, infoForm, {
      headers: authHeader2(),
    });
  }

  addCategory(categoryForm, contestId) {
    return axios.post(API_URL + "createCategories/" + contestId, categoryForm, {
      headers: authHeader2(),
    });
  }

  addNominees(nomineeForm, contestName, categoryId) {
    return axios.post(
      API_URL + "createNominees/" + contestName + "/" + categoryId,
      nomineeForm,
      {
        headers: authHeader(),
      }
    );
  }

  allForms() {
    return axios.get(API_URL + "allForms", { headers: authHeader() });
  }

  getSingleForm(formId) {
    return axios.get(API_URL + "getForm/" + formId, { headers: authHeader() });
  }

  allFormForAdmin() {
    return axios.get(API_URL + "allForms", { headers: authHeader() });
  }

  getFormResponse(id) {
    return axios.get(API_URL + "getFormReplies/" + id, { headers: authHeader() });
  }
}

export default new EventForm();
