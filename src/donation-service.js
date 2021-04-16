export class DonationService {
  candidateList = [];
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
}
