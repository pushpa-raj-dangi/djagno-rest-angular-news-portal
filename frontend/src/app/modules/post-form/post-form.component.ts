import { DashboardService } from "src/app/modules/dashboard.service";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.scss"],
})
export class PostFormComponent implements OnInit {
  categories;
  tags;
  postForm: FormGroup;

  constructor(
    private dashboardService: DashboardService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getTags();
    this.postForm = this.fb.group({
      title: new FormControl("", [Validators.required]),
      slug: new FormControl("test-slug", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      category_id: new FormControl("", [Validators.required]),
      tag_id: new FormControl("", [Validators.required]),
      user_id: new FormControl("1", [Validators.required]),
    });
  }

  createPost() {
    this.dashboardService.createPost(this.postForm.value).subscribe(
      (x) => {
        console.log(x);
        console.log(this.postForm.value);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCategories() {
    this.dashboardService.getTags().subscribe((x) => {
      this.tags = x;
    });
  }

  getTags() {
    this.dashboardService.getCategories().subscribe((x) => {
      this.categories = x;
    });
  }
}
