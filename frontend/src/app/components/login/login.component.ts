import { SnackComponent } from "./../snack/snack.component";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  title = "Login";

  hide: any;
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
    if (this.userService.isLoggedIn()) {
      this.router.navigate(["/dashboard"]);
    }
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  };

  public submitLoginForm = (loginFormValue) => {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe(
        (x: any) => {
          if (x.access) {
            localStorage.setItem("JWT", x.access);
            this.router.navigate(["/"]);
          }
        },
        (error) => {
          console.log(error.error.detail);
          this.oepnSnack(error.error.detail);
        }
      );
    }
  };
  oepnSnack(detail) {
    this.snackBar.open(detail, "Try again!", {
      duration: 3000,
      panelClass: ["red-snackbar", "login-snackbar"],
      verticalPosition: "top",
    });
  }

  register() {
    this.router.navigate["/signup"];
  }
}
