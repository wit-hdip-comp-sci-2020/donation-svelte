export class DonationService {
  candidateList = [];
  donationList = [];
  baseUrl = "";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getCandidates() {
    try {
      const response = await fetch(this.baseUrl + "/api/candidates")
      this.candidateList = await response.json();
      return this.candidateList;
    } catch (error) {
      return [];
    }
  }

  async getDonations() {
    try {
      const response = await fetch(this.baseUrl + "/api/donations")
      this.donationList = await response.json();
      return this.donationList;
    } catch (error) {
      return [];
    }
  }
}
