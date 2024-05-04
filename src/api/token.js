import { ENV } from "@/utils";
import jwtDecode from "jwt-decode";
export class Token {
  setToken(token) {
    localStorage.setItem(ENV.TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(ENV.TOKEN);
  }

  hasExpired(token_user) {
    const token = jwtDecode(token_user);
    const expireDate = token.exp * 1000;
    const currentDate = new Date().getTime();
    if (currentDate > expireDate) {
      return true;
    }
    return false;
  }

  removeToken() {
    localStorage.removeItem(ENV.TOKEN);
  }
}
