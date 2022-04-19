import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  constructor(private usrService: UserService) {}
  user;

  ngOnInit() {
    this.usrService.getLoggedInUser().subscribe((user) => {
      this.user = user;
    });
  }
}
