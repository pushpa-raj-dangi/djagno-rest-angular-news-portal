import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  hide: any;
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      username: new FormControl("", [Validators.required]),
      last_name: new FormControl("", [Validators.required]),
      first_name: new FormControl("", [Validators.required]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
    if (this.userService.isLoggedIn()) {
      this.router.navigate(["/"]);
    }
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  };

  // function call on submit login form
  public submitLoginForm = (loginFormValue) => {
    if (this.loginForm.valid) {
      this.userService.register(this.loginForm.value).subscribe((data) => {
        this.router.navigate(["/login"]);
      });
    }
  };

  register() {
    this.router.navigate["/"];
  }
}
