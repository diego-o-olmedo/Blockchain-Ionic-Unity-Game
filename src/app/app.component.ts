import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { AppState } from "./app.service";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "AuctionsPage";

  pages: Array<{ title: string; component: any }>;

  constructor(public platform: Platform, public appState: AppState) {
    this.initializeApp();

    this.pages = [
      { title: "Auctions", component: "AuctionsPage" },
      { title: "Home", component: "HomePage" },
      { title: "Battle", component: "GamePage" },
      { title: "MyShips", component: "MyShipsPage" }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {});
  }

  page(selected) {
    console.log("select", selected);
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
