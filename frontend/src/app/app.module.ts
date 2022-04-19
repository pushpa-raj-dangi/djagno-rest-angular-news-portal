import { MatSelectModule } from "@angular/material/select";
import { MatChipsModule } from "@angular/material/chips";
import { GeneralService } from "./services/general.service";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DefaultModule } from "./layouts/default/default.module";
import { PublicModule } from "./layouts/public/public.module";
import { PostDeatilComponent } from "./modules/post-deatil/post-deatil.component";
import { LoginComponent } from "./components/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from "@angular/material/button";
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatMenuModule } from "@angular/material/menu";
import { SignupComponent } from "./components/signup/signup.component";
import { SnackComponent } from "./components/snack/snack.component";
import { PostFormComponent } from "./modules/post-form/post-form.component";
import { ProfileComponent } from "./modules/profile/profile.component";
import { EditorModule, TINYMCE_SCRIPT_SRC } from "@tinymce/tinymce-angular";
@NgModule({
  declarations: [
    AppComponent,
    PostDeatilComponent,
    LoginComponent,
    SignupComponent,
    SnackComponent,
    PostFormComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    PublicModule,
    BrowserModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatListModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatSelectModule,
    EditorModule,
    MatListModule,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: "tinymce/tinymce.min.js" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
