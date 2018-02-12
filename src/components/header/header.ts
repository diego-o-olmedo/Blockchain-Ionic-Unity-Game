import { Component } from "@angular/core"

import { Nav } from "ionic-angular"
import { AppState } from "../../app/app.service"

@Component({
  selector: "header-component",
  templateUrl: "header.html"
})
export class HeaderComponent {
  pages = [
    { title: "Auctions", component: "AuctionsPage" },
    { title: "Battle", component: "GamePage" },
    { title: "MyShips", component: "MyShipsPage" }
  ]
  constructor(public nav: Nav, public appState: AppState) {}

  openPage(page) {
    this.nav.setRoot(page.component)
  }
}
