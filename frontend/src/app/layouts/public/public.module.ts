import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PublicRoutingModule } from "./public-routing.module";
import { PublicComponent } from "./public.component";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeComponent } from "src/app/modules/home/home.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatChipsModule } from "@angular/material/chips";

@NgModule({
  declarations: [PublicComponent, HomeComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FlexLayoutModule,
    SharedModule,
    MatChipsModule,
    HttpClientModule,
    MatCardModule,
  ],
})
export class PublicModule {}
