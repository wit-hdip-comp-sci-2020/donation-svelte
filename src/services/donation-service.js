import axios from "axios";
import {user} from "../stores";

export class DonationService {
  candidateList = [];
  donationList = [];
  baseUrl = "";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    if (localStorage.donation) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.donation);
    }
  }

  async getCandidates() {
    try {
      const response = await axios.get(this.baseUrl + "/api/candidates");
      this.candidateList = response.data;
      return this.candidateList;
    } catch (error) {
      return [];
    }
  }

  async getDonations() {
    try {
      const response = await axios.get(this.baseUrl + "/api/donations");
      this.donationList = response.data;
      return this.donationList;
    } catch (error) {
      return [];
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token
        });
        localStorage.donation = JSON.stringify(response.data.token);
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      token: ""
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.donation = null;
  }

  async donate(amount, method, candidate) {
    try {
      const donation = {
        amount: amount,
        method: method,
        candidate: candidate,
      };
      const response = await axios.post(this.baseUrl + "/api/candidates/" + candidate._id + "/donations", donation);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }

  async updateSettings(firstName, lastName, email, password, id) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        _id: id
      };
      console.log(userDetails);
      const response = await axios.put(`${this.baseUrl}/api/users/${id}`, userDetails);
      const newUser = await response.data;
      user.set(newUser);
      return true;
    } catch (error) {
      return false;
    }
  }

  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      const response = await axios.post(this.baseUrl + "/api/users", userDetails);
      const newUser = await response.data;
      user.set(newUser);
      return true;
    } catch (error) {
      return false;
    }
  }
}
