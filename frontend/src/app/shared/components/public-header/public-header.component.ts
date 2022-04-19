import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-public-header",
  templateUrl: "./public-header.component.html",
  styleUrls: ["./public-header.component.scss"],
})
export class PublicHeaderComponent implements OnInit {
  constructor(public userService: UserService, private router: Router) {}
  user;

  ngOnInit() {
    this.getUserName();
  }

  getUserName() {
    this.userService.getLoggedInUser().subscribe(
      (x: any) => {
        console.log(x);

        console.log(x.user + "user");

        this.user = x;
      },
      (error) => {
        if (error.status === 401) {
          localStorage.removeItem("JWT");
        }
      }
    );
  }

  logout() {
    this.userService.logout();
  }
}
