import BaseService from "./baseService.js";

class SubmissionService extends BaseService {
  getSubmissions(email, password) {
    this.endPoint = "/submissions";
    return this.get();
  }
}

export default new SubmissionService();
