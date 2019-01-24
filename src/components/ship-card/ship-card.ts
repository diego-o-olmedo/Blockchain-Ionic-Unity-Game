import { Component, Input, ViewChild, ViewEncapsulation } from "@angular/core";
import { AppState } from "../../app/app.service";
import { NavController } from "ionic-angular";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
declare var io;

@Component({
  selector: "ship-card",
  templateUrl: "ship-card.html",
  encapsulation: ViewEncapsulation.None
})
export class ShipCardComponent {
  @Input() ship: any; //Array<{ id: number; name: string; distance: number }>'
  @Input() demo: boolean;
  @ViewChild("svg") svg;
  @ViewChild("wrapper") wrapper;
  svgUrl;
  svgNative;
  original;

  constructor(
    public appState: AppState,
    public navCtrl: NavController,
    public http: Http
  ) { }

  ngOnInit() {
    if (!this.demo) {
      this.initShip(this.ship.model, false);
    } else {
      setInterval(() => {
        let model = Math.floor(Math.random() * 5.599999);
        this.initShip(model, true);
      }, 700);
    }
  }

  initShip(model, demo) {
    if (this.appState.shipImages[model]) {
      this.finalizeShip(this.appState.shipImages[model], demo);
    } else {
      this.http
        .get("/images/ships/" + model + "-ship.svg")
        .map(res => res.text())
        .subscribe(
          data => {
            this.appState.shipImages[model] = data;
            this.finalizeShip(data, demo);
          },
          err => console.log(err)
        );
    }
  }

  positionEleToCenter() {
    var bbox = this.svgNative.getBBox();
    console.log(bbox.width + " bbox " + bbox.height);

    let viewBox: any = this.svgNative.getAttribute("viewBox");
    console.log(viewBox);
    viewBox = viewBox.split(" ");

    var cx = parseFloat(viewBox[0]) + parseFloat(viewBox[2]) / 2;
    var cy = parseFloat(viewBox[1]) + parseFloat(viewBox[3]) / 2;

    var x = cx - bbox.x - bbox.width / 2;
    var y = cy - bbox.y - bbox.height / 2;
    var matrix = "1 0 0 1 " + x + " " + y;
    this.svgNative.setAttribute("transform", "matrix(" + matrix + ")");
  }

  finalizeShip(shipLoad, demo) {
    shipLoad = shipLoad.slice(0);
    shipLoad = shipLoad.replace("Layer_1", "Layer_1-" + Math.random());
    let data = shipLoad.replace(/ChangeName/g, "id" + this.ship.id);
    data = data.replace(/cls-/g, "id" + this.ship.id + "-");
    this.appState.changedOne = true;
    this.original = data;
    if (demo) {
      data = this.getColorsDemo(data);
    } else {
      data = this.getColors(data);
    }
    console.log('before inner')
    this.wrapper.nativeElement.innerHTML = data;
    this.svgNative = this.wrapper.nativeElement.children[0];

    if (this.svgNative.children["CENTER_CANNON"]) {
      if (
        (demo && Math.random() > 0.5) ||
        (!demo && this.ship.primaryWeapon[0] == "B")
      ) {
        this.svgNative.children["CENTER_CANNON"].innerHTML = "";
      } else {
        this.svgNative.children["WING_CANNON_1"].innerHTML = "";
        let cannon2 = this.svgNative.children["WING_CANNON_2"];
        if (cannon2) {
          cannon2.innerHTML = "";
        }
      }
    }

  }

  goToShip(e, id) {
    e.preventDefault();
    this.navCtrl.setRoot("ShipPage", { id: id });
    this.appState.activePage = "/ship";
  }

  ionViewDidLoad() { }

  getColorsDemo(data) {
    this.ship.primaryColor[0] = Math.random() * 255;
    this.ship.primaryColor[1] = Math.random() * 255;
    this.ship.primaryColor[2] = Math.random() * 255;
    this.ship.secondaryColor[0] = Math.random() * 255;
    this.ship.secondaryColor[1] = Math.random() * 255;
    this.ship.secondaryColor[2] = Math.random() * 255;

    let primaryColor =
      "rgb(" +
      this.ship.primaryColor[0]++ +
      "," +
      this.ship.primaryColor[1]++ +
      "," +
      this.ship.primaryColor[2]-- +
      ")";
    let secondaryColor =
      "rgb(" +
      this.ship.secondaryColor[0]-- +
      "," +
      this.ship.secondaryColor[1]-- +
      "," +
      this.ship.secondaryColor[2]++ +
      ")";

    if (Math.random() > 0.75) {
      let ind = data.indexOf("fill:#");
      data = data.replace(data.substring(ind + 5, ind + 12), secondaryColor);
      data = data.replace(/PrimaryColor/g, primaryColor);
      data = data.replace(/SecondaryColor/g, primaryColor);
    } else {
      data = data.replace(/PrimaryColor/g, primaryColor);
      data = data.replace(/SecondaryColor/g, secondaryColor);
    }
    return data;
  }

  getColors(data) {
    let primaryColor =
      "rgb(" +
      this.ship.primaryColor[0] +
      "," +
      this.ship.primaryColor[1] +
      "," +
      this.ship.primaryColor[2] +
      ")";
    let secondaryColor =
      "rgb(" +
      this.ship.secondaryColor[0] +
      "," +
      this.ship.secondaryColor[1] +
      "," +
      this.ship.secondaryColor[2] +
      ")";

    if (this.ship.secondaryWeapon[0] == "B") {
      let ind = data.indexOf("fill:#");
      data = data.replace(data.substring(ind + 5, ind + 12), secondaryColor);
      data = data.replace(/PrimaryColor/g, primaryColor);
      data = data.replace(/SecondaryColor/g, primaryColor);
    } else {
      data = data.replace(/PrimaryColor/g, primaryColor);
      data = data.replace(/SecondaryColor/g, secondaryColor);
    }
    return data;
  }

}
