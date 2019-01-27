import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController } from "ionic-angular";
import { AppState } from "../../app/app.service";
import { Web3Service } from "../../app/web3.service";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
declare var io: any;

@IonicPage({
  segment: "ship/:id"
})
@Component({
  selector: "page-ship",
  templateUrl: "ship.html"
})
export class ShipPage {
  // loading = true
  id = this.navParams.data.id;
  ship;
  amOwner;
  sell = { open: false, priceStart: null, priceEnd: null, duration: null };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public appState: AppState,
    public web3Service: Web3Service,
    private alert: AlertController
  ) {
    let address = "/api/v1/ship?id=" + encodeURI(this.id);
    io.socket.get(address, data => {
      console.log(data)
      if (typeof data == "string") {
      } else {
        this.ship = data;
        if (this.appState.ships) {
          this.amOwner = this.appState.ships.some(item => {
            return item.id === this.id;
          });
        }
      }
    });
    console.log(this.appState)
  }

  ngOnInit() { }

  ionViewDidLoad() { }

  createSale() {
    if (
      this.id &&
      this.sell.priceStart &&
      this.sell.priceEnd &&
      this.sell.duration
    ) {
      this.web3Service.sell(
        this.id,
        this.sell.priceStart,
        this.sell.priceEnd,
        this.sell.duration
      );
    } else {
      console.log("createSale failed, missing data");
    }
  }

  purchase() {
    let msg;
    if (!this.appState.account) {
      msg = 'No Ethereum account found. ' + this.appState.accountStatus
    }
    if (!msg) {
      try {
        this.web3Service.purchase(this.id);
      } catch (e) {
        msg = e
      }
    }
    if (msg) {
      const alerting = this.alert.create({
        title: 'Error',
        message: msg,
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              console.log('Buy clicked');
            }
          }
        ]
      });
      alerting.present();
    }
  }
}
