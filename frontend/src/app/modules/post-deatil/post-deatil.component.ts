import { DashboardComponent } from "./../dashboard/dashboard.component";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { baseUrl } from "src/environments/environment";
import { DashboardService } from "../dashboard.service";

@Component({
  selector: "app-post-deatil",
  templateUrl: "./post-deatil.component.html",
  styleUrls: ["./post-deatil.component.scss"],
})
export class PostDeatilComponent implements OnInit {
  url: string = baseUrl;
  post: any;
  posts;
  id: number;
  constructor(
    private router: ActivatedRoute,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.id = +params["id"];

      this.loadNews(this.id);
    });
    this.dashboardService.getPosts().subscribe((x) => {
      this.posts = x;
    });
  }

  loadNews(id) {
    this.getNew(id);
  }
  getNew(id) {
    this.dashboardService.getPost(id).subscribe((x) => {
      this.post = x;
    });
  }
  toTop() {
    window.scrollTo(0, 1000);
  }
}
