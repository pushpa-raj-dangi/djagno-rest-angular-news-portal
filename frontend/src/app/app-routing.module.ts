import { ProfileComponent } from "./modules/profile/profile.component";
import { LoginComponent } from "./components/login/login.component";
import { PublicComponent } from "./layouts/public/public.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { PostsComponent } from "./modules/posts/posts.component";
import { PostDeatilComponent } from "./modules/post-deatil/post-deatil.component";
import { HomeComponent } from "./modules/home/home.component";
import { SignupComponent } from "./components/signup/signup.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { PostFormComponent } from "./modules/post-form/post-form.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "",
    component: PublicComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: "posts",
        component: PostsComponent,
      },

      {
        path: "posts/:id",
        component: PostDeatilComponent,
      },
    ],
  },
  {
    path: "dashboard",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "posts",
        component: PostsComponent,
      },
      {
        path: "create-post",
        component: PostFormComponent,
      },
      {
        path: "profile",
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
