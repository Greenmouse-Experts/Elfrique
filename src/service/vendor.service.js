import axios from "axios";
import authHeader from "./auth-header2";
import authHeader2 from "./auth-header";
import { _API_URL } from "../configs";

const API_URL = _API_URL;
class VendorService {
  getEvents() {
    return axios.get(API_URL + "getAllEvents", { headers: authHeader() });
  }

  getAllJobs() {
    return axios.get(API_URL + "getAllJob", { headers: authHeader() });
  }

  getAllSellerJob() {
    return axios.get(API_URL + "getAllSellerJob", { headers: authHeader() });
  }

  getSingleJob(jobId) {
    return axios.get(API_URL + "getJob/" + jobId);
  }

  getAllUrls() {
    return axios.get(API_URL + "url/getallUrl", { headers: authHeader() });
  }

  getUserAds() {
    return axios.get(API_URL + "getUserAds", { headers: authHeader() });
  }

  getAllAds() {
    return axios.get(API_URL + "getAllAds", { headers: authHeader() });
  }

  createUrl(urlForm) {
    return axios.post(API_URL + "url/shorten", urlForm, {
      headers: authHeader2(),
    });
  }

  createVendor(vendorForm) {
    return axios.post(API_URL + "createVendorProfile", vendorForm, {
      headers: authHeader(),
    });
  }

  getVendorProfile() {
    return axios.get(API_URL + "getVendorProfileUser", {
      headers: authHeader(),
    });
  }

  createJobs(jobForm, eventId) {
    return axios.post(API_URL + "createjob/" + eventId, jobForm, {
      headers: authHeader(),
    });
  }

  deleteJob(eventId, id) {
    return axios.delete(API_URL + "deletejob/" + eventId + "/" + id, {
      headers: authHeader(),
    });
  }

  createAdvert(advertForm) {
    return axios.post(API_URL + "createAds", advertForm, {
      headers: authHeader(),
    });
  }

  createProposal(bidForm, eventId) {
    return axios.post(API_URL + "createProposal/" + eventId, bidForm);
  }

  getCategories(contestId) {
    return axios.get(API_URL + "getallCategories/" + contestId, {
      headers: authHeader(),
    });
  }

  getAllProposal(jobId){
    return axios.get(API_URL + "getAllProposal/" + jobId, {
      headers: authHeader2()
    })
  }

  deleteProposal(id){
    return axios.delete(API_URL + "deleteProposal/" + id, {
      headers: authHeader2()
    })
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
}

export default new VendorService();
