import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { baseUrl } from "../../environments/environment";

import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(data) {
    return this.http.post(`${baseUrl}auth/users/`, data);
  }
  login(data) {
    return this.http.post(`${baseUrl}auth/jwt/create/`, data);
  }

  isLoggedIn() {
    return !!this.getJwt();
  }

  getJwt() {
    return localStorage.getItem("JWT");
  }

  getDecodedToken() {
    if (this.getJwt()) {
      console.log(jwt_decode(this.getJwt()));

      return jwt_decode(this.getJwt())["user_id"];
    }
  }

  logout() {
    localStorage.removeItem("JWT");
  }

  getLoggedInUser() {
    var header = {
      headers: new HttpHeaders().set("Authorization", `JWT ${this.getJwt()}`),
    };
    // return this.http.get(`${baseUrl}auth/users/me`);
    return this.http.get(`${baseUrl}auth/users/me`, header);
  }
}
