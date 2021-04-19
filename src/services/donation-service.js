import axios from "axios";

export class DonationService {
  candidateList = [];
  donationList = [];
  baseUrl = "";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
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
      return response.status == 200;
    } catch (error) {
      return false;
    }
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
}
