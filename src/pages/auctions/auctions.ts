import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
declare var io: any;

@IonicPage()
@Component({
  selector: "page-auctions",
  templateUrl: "auctions.html"
})
export class AuctionsPage {
  ships;
  loading = true;
  offset = 0;
  show = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http
  ) {
    console.log("auction con");
    this.request(true);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AuctionsPage");
  }

  request(initial?) {
    console.log("io auctions//");
    // io.socket.get("/api/auction", event => {
    //   console.log(event)
    //   let result = []
    //   event.auctions.forEach(record => {
    //     record.stats["price"] = record.currentPrice
    //     result.push(record.stats)
    //   })
    //   this.ships = result
    //   this.loading = false
    // })

    io.socket.get(
      "/api/v1/shipsRandom?offset=" + (3759 + this.offset * 12),
      data => {
        this.loading = false;

        function sortObject(o) {
          return Object.keys(o)
            .sort()
            .reduce((r, k) => ((r[k] = o[k]), r), {});
        }
        if (data) {
          console.log(data);
          if (data.length > 0) {
            // data.forEach(ship => {
            //   ship["img"] = "randomColo" + Math.floor(Math.random() * 4.99) + ".png"
            // })

            data.sort((a, b) => {
              return a.id - b.id;
            });
            this.ships = data;
            if (initial) {
              setTimeout(() => {
                this.show = true;
              }, 150);
            }
            this.loading = false;
          }
        } else {
          console.log("unable to load ships");
        }
      }
    );
  }

  changeTab(ment) {
    this.offset += ment;
    this.loading = true;
    // this.ships = null;
    this.request();
  }

  parseResult(data) {
    console.log("got result", data);
    this.loading = false;
    console.log(data);
    if (data.length > 0) {
      // data.forEach(ship => {
      //   ship["img"] = "randomColo" + Math.floor(Math.random() * 4.99) + ".png"
      // })
      this.ships = data;
    }
    console.log("done");
  }
}
