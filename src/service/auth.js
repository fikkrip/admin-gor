import BaseService from "./baseService.js";

class AuthService extends BaseService {
  login(email, password) {
    this.endPoint = "/login";
    const user = {
      email,
      password,
    };

    return this.post(user);
  }

  logout() {
    localStorage.removeItem("___user_data");
  }
}

export default new AuthService();
