import axios from "axios";
import authHeader from "./auth-header2";
import authHeader2 from "./auth-header";
import { _API_URL } from "../configs";

const API_URL = _API_URL;
class BlogService {
  createBlog(blogForm) {
    return axios.post(API_URL + "createBlog", blogForm, {
      headers: authHeader(),
    });
  }

  getBlogs() {
    return axios.get(API_URL + "getBlogs", { headers: authHeader() });
  }

  getSingleBlog(blogId) {
    return axios.get(API_URL + "getBlog/" + blogId, { headers: authHeader() });
  }

  editBlog(blogId, payload) {
    return axios.patch(API_URL + "editBlog/" + blogId, payload, { headers: authHeader() });
  }

  deleteBlog(blogId) {
    return axios.delete(API_URL + "deleteBlog/" + blogId, { headers: authHeader() });
  }

  /*  getContests() {
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

  allEvents() {
    return axios.get(API_URL + "allEvents", { headers: authHeader() });
  }

  allEventsforAdmin() {
    return axios.get(API_URL + "getEvents", { headers: authHeader() });
  } */
}

export default new BlogService();
