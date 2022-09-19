import axios from "axios";
import authHeader from "./auth-header2";
import authHeader2 from "./auth-header";
import spHeader from "./super-authHeader";
import { _API_URL } from "../configs";

const API_URL = _API_URL;
class VoteService {
  createVote(voteForm) {
    return axios.post(API_URL + "createVote", voteForm, {
      headers: authHeader(),
    });
  }

  createAward(awardForm) {
    return axios.post(API_URL + "createAward", awardForm, {
      headers: authHeader(),
    });
  }

  getAwards() {
    return axios.get(API_URL + "getallAward", { headers: authHeader() });
  }

  getContests() {
    return axios.get(API_URL + "getallVote", { headers: authHeader() });
  }

  getallUserContest() {
    return axios.get(API_URL + "getallUserContests", { headers: authHeader2() });
  }

  addContestant(contestantForm, contestId) {
    return axios.post(
      API_URL + "createContestant/" + contestId,
      contestantForm,
      {
        headers: authHeader(),
      }
    );
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

  getAllContests() {
    return axios.get(API_URL + "allVoteContest", { headers: authHeader() });
  }

  getAllAwards() {
    return axios.get(API_URL + "allAwards", { headers: authHeader() });
  }

  getSingleContest(contestId) {
    return axios.get(API_URL + "getVote/" + contestId, {
      headers: authHeader(),
    });
  }

  getAllVoters(contestId) {
    return axios.get(API_URL + "allUserContestVotes/" + contestId, {
      headers: authHeader(),
    });
  }

  getSingleAward(contestId) {
    return axios.get(API_URL + "getAward/" + contestId, {
      headers: authHeader(),
    });
  }

  getSingleCategory(contestId) {
    return axios.get(API_URL + "getSingleCategory/" + contestId, {
      headers: authHeader(),
    });
  }

  getSingleNominee(contestId) {
    return axios.get(API_URL + "getSingleNominee/" + contestId, {
      headers: authHeader(),
    });
  }

  getAContestant(contestantId) {
    return axios.get(API_URL + "getContestant/" + contestantId, {
      headers: authHeader(),
    });
  }

  getAllContestForAdmin() {
    return axios.get(API_URL + "getAllContests", { headers: spHeader() });
  }
}

export default new VoteService();
