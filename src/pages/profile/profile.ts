import { Component } from "@angular/core"
import { IonicPage, NavController, NavParams } from "ionic-angular"

import { Http } from "@angular/http"
import "rxjs/add/operator/map"
declare let io

@IonicPage({
  segment: "profile/:address"
})
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  ships = []
  loading = true
  address = this.navParams.data.address

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {
    if (this.address && this.address.length > 8) {
      this.getProfile()
    } else {
      this.loading = false
    }
  }

  getProfile() {
    io.socket.get("/api/v1/ships?address=" + encodeURI(this.address), data => {
      this.loading = false
      console.log(data)
      if (data.length > 0) {
        // data.forEach(ship => {
        //   ship["img"] = "randomColo" + Math.floor(Math.random() * 4.99) + ".png"
        // })
        this.ships = data
      }
    })
  }
}
