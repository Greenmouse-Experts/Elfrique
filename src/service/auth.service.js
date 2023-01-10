import axios from "axios";
import spHeader from "./super-authHeader";
import { _API_URL } from "../configs";

const API_URL = _API_URL;
class AuthService {
  async login(user) {
    const response = await axios.post(API_URL + "login", {
      email: user.email,
      password: user.password,
    });
    if (response.data.token) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          firstname: response.data.user.firstname,
          lastname: response.data.user.lastname,
          role: response.data.user.role,
          token: response.data.token,
        })
      );
    }
    return response.data;
  }

  async loginSuperAdmin(user) {
    const response = await axios.post(API_URL + "adminLogin", {
      email: user.email,
      password: user.password,
    });
    if (response.data.token) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          firstname: response.data.user.firstname,
          lastname: response.data.user.lastname,
          role: response.data.user.role,
          token: response.data.token,
        })
      );
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  logoutAdmin() {
    localStorage.removeItem("SuperAdmin");
  }

  register(user) {
    return axios.post(API_URL + "signup", {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      phonenumber: user.phonenumber,
      confirmpassword: user.confirmpassword,
      referral: user.referral,
    });
  }

  verify(email, token) {
    return axios.get(
      API_URL + "verifyemail?email=" + email + "&token=" + token
    );
  }

  getOrganizers() {
    return axios.get(API_URL + "getAllUsers", { headers: spHeader() });
  }

  deleteOrganizer(id) {
    return axios.delete(API_URL + "deleteUser/" + id, { headers: spHeader() });
  }

  changeStatusOrganizer(id, payload) {
    return axios.patch(API_URL + "changeStatus/" + id, payload, { headers: spHeader() });
  }
}

export default new AuthService();
