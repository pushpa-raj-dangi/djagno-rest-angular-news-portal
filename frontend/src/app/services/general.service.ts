import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { baseUrl } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class GeneralService {
  url: string = baseUrl;

  constructor(private title: Title, private http: HttpClient) {}

  setTitle(title: string) {
    this.title.setTitle(title);
  }
  getPost(id: number) {
    return this.http.get(`${this.url}portal/posts/${id}`);
  }
}
