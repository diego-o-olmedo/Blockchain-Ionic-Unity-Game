import { Component } from "@angular/core"
import { IonicPage, NavController, NavParams } from "ionic-angular"

@IonicPage({
  segment: "ship/:id"
})
@Component({
  selector: "page-ship",
  templateUrl: "ship.html"
})
export class ShipPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ShipPage")
  }
}
