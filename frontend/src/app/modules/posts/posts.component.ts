import { DashboardService } from "src/app/modules/dashboard.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { PeriodicElement } from "../dashboard/dashboard.component";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  posts;
  dataSource;
  displayedColumns: string[] = ["id", "title", "created_at", "user"];
  constructor(private postService: DashboardService) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    // this.dataSource = this.posts;
    this.postService.getPosts().subscribe((x) => {
      this.posts = x;
      this.dataSource = x;
      console.log(x);
    });
  }
}
