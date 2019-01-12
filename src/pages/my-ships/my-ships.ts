import { Component } from "@angular/core"
import { IonicPage, NavController, NavParams, Events } from "ionic-angular"
import { AppState } from "../../app/app.service"

import { Http } from "@angular/http"
import "rxjs/add/operator/map"

@IonicPage()
@Component({
  selector: "page-my-ships",
  templateUrl: "my-ships.html"
})
export class MyShipsPage {
  p: number = 1
  ships
  noAccount = false
  // loading = true
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appState: AppState,
    public http: Http,
    public events: Events
  ) {
    if (this.appState.account && this.appState.account.length > 8) {
    } else {
      this.noAccount = true
      // this.loading = false
    }
    // this.request()

    // events.subscribe("account:changed", account => {
    //   this.changeAccount()
    // })
  }

  // request() {
  //   if (this.appState.account && this.appState.account.length > 8) {
  //     let url =
  //       "https://api.eth.bid/api/v1/ships?address=" +
  //       // "http://localhost:8080/api/v1/ships?address=" +
  //       encodeURI(this.appState.account)
  //     console.log(url)
  //     this.http
  //       .get(url)
  //       .map(res => res.json())
  //       .subscribe(
  //         data => this.parseResult(data),
  //         err => console.log(err),
  //         () => console.log("Complete")
  //       )
  //   } else {
  //     this.noAccount = true
  //     this.loading = false
  //   }
  // }

  // parseResult(data) {
  //   console.log("got result", data)
  //   this.loading = false
  //   console.log(data)
  //   if (data.length > 0) {
  //     // data.forEach(ship => {
  //     //   ship["img"] = "randomColo" + Math.floor(Math.random() * 4.99) + ".png"
  //     // })
  //     this.ships = data
  //   }
  //   console.log("done")
  // }

  // changeAccount() {
  //   this.loading = true
  //   this.ships = []
  //   this.request()
  // }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MyShipsPage")
  }
}
