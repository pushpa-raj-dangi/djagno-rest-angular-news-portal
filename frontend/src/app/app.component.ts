import { Component } from "@angular/core";
import { GeneralService } from "./services/general.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  /**
   *
   */
  constructor(private titleService: GeneralService) {
    this.titleService.setTitle("Nepal No.1 News Portal");
  }
}
