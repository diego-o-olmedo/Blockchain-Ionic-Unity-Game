import { Component, NgZone } from "@angular/core"
import { NavController } from "ionic-angular"
import { AppState } from "../../app/app.service"

@Component({
  selector: "header-component",
  templateUrl: "header.html"
})
export class HeaderComponent {
  pages = [
    { title: "Auctions", component: "AuctionsPage", href: "auctions" },
    { title: "Game", component: "GamePage", href: "game" },
    { title: "My Ships", component: "MyShipsPage", href: "my-ships" }
  ]
  constructor(
    public navCtrl: NavController,
    public appState: AppState,
    public zone: NgZone
  ) {}

  ngOnInit() {}

  openPage(e, page) {
    e.preventDefault()
    // this.nav.setRoot(page.component)
    this.zone.run(() => {
      console.log(this.appState.activePage)
      this.appState.activePage = page.href
      if (window.location.pathname.split("/")[1] != page.href) {
        if (window["gameInstance"]) {
          // window["gameInstance"] = null
          // let element = document.getElementById("canvaswindow")
          window.location.href = page.href
          // element.outerHTML = ""
          // window["gameInstance"].SendMessage("Web3", "Exit")
        } else {
          this.navCtrl.setRoot(page.component)
        }
      }
    })
  }
}
