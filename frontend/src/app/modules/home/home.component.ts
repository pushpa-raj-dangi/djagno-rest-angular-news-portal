import { Component, OnInit } from "@angular/core";
import { DashboardService } from "../dashboard.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  posts: any[] = [];

  vegetables: any[] = [
    { name: "apple" },
    { name: "banana" },
    { name: "strawberry" },
    { name: "orange" },
    { name: "kiwi" },
    { name: "cherry" },
  ];

  constructor(private dashboardServie: DashboardService) {}
  title = "Mero News :: Nepal no. 1 News portal system";

  ngOnInit() {
    this.dashboardServie.getPosts().subscribe((posts: any[]) => {
      this.posts = posts;
    });
    console.log(this.posts);
  }
}
