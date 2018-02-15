import { Component } from "@angular/core"
import { IonicPage, NavController, NavParams } from "ionic-angular"

import { Http } from "@angular/http"
import "rxjs/add/operator/map"

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
  address

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {
    this.address = this.navParams.data.address
    console.log(this.address)
    this.request()
  }

  request() {
    if (this.address && this.address.length > 8) {
      let url =
        // "https://api.eth.bid/api/v1/ships?address="
        "http://localhost:8080/api/v1/ships?address=" + encodeURI(this.address)
      console.log(url)
      this.http
        .get(url)
        .map(res => res.json())
        .subscribe(
          data => this.parseResult(data),
          err => console.log(err),
          () => console.log("Complete")
        )
    } else {
      this.loading = false

      this.ships = [
        {
          id: 777,
          name: "Placeholder Ship1",
          model: 0,
          size: "Small",
          color1: "Blue",
          color2: "Orange",
          img: "randomColo" + Math.floor(Math.random() * 4.99) + ".png"
        },
        {
          id: 333,
          name: "Placeholder Ship2",
          model: 1,
          size: "Large",
          color1: "Blue",
          color2: "Green",
          img: "randomColo" + Math.floor(Math.random() * 4.99) + ".png"
        },
        {
          id: 123,
          name: "Placeholder Ship3",
          model: 2,
          size: "Normal",
          color1: "Pink",
          color2: "Red",
          img: "randomColo" + Math.floor(Math.random() * 4.99) + ".png"
        },
        {
          id: 123,
          name: "Placeholder Ship4",
          model: 0,
          size: "Normal",
          color1: "Pink",
          color2: "Red",
          img: "randomColo" + Math.floor(Math.random() * 4.99) + ".png"
        }
      ]
    }
  }

  parseResult(data) {
    this.loading = false
    console.log(data)
    if (data.length > 0) {
      data.forEach(ship => {
        ship["img"] = "randomColo" + Math.floor(Math.random() * 4.99) + ".png"
      })
      this.ships = data
      console.log(this.ships[2].img)
    }
    console.log("done")
  }
}
