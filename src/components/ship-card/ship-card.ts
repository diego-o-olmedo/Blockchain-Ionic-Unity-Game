import { Component, Input, ViewChild, ViewEncapsulation } from "@angular/core"
import { DomSanitizer } from "@angular/platform-browser"
import { AppState } from "../../app/app.service"
import { NavController } from "ionic-angular"
import { Http } from "@angular/http"
import "rxjs/add/operator/map"
declare var io

@Component({
  selector: "ship-card",
  templateUrl: "ship-card.html",
  encapsulation: ViewEncapsulation.None
})
export class ShipCardComponent {
  @Input() ship: any //Array<{ id: number; name: string; distance: number }>
  @ViewChild("svg") svg
  @ViewChild("wrapper") wrapper
  svgUrl
  svgNative

  constructor(
    private sanitizer: DomSanitizer,
    public appState: AppState,
    public navCtrl: NavController,
    public http: Http
  ) {}
  ngOnInit() {
    // setTimeout(() => {
    // let shipModel = this.ship.model <= 2 ? 1 : 2
    // this.svgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    //   "/assets/imgs/ships/ship" + shipModel + ".svg"
    // )
    // console.log(this.ship)
    // let shipModel = this.ship.model == 1 ? 1 : 2
    // this.svgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    //   "/assets/imgs/ships/ship" + shipModel + ".svg"
    // )
    // console.log(this.wrapper)
    let shipLoad
    if (this.appState.shipImages[this.ship.model]) {
      this.finalizeShip(this.appState.shipImages[this.ship.model])
    } else {
      this.http
        .get("/images/ships/" + this.ship.model + "-ship.svg")
        .map(res => res.text())
        .subscribe(
          data => {
            this.appState.shipImages[this.ship.model] = data
            this.finalizeShip(data)
          },
          err => console.log(err)
        )
    }
    // if (this.ship.model == 1) {
    //   shipLoad = this.appState.ship1
    // } else if (this.ship.model == 2) {
    //   shipLoad = this.appState.ship2
    // } else if (this.ship.model == 3) {
    //   shipLoad = this.appState.ship3
    // } else if (this.ship.model == 4) {
    //   shipLoad = this.appState.ship4
    // } else {
    //   console.log(this.ship.model)
    //   shipLoad = this.appState.ship0
    // }
    // }, 80)
    // this.doneLoading()
  }

  positionEleToCenter() {
    var bbox = this.svgNative.getBBox()
    console.log(bbox.width + " bbox " + bbox.height)

    let viewBox: any = this.svgNative.getAttribute("viewBox")
    console.log(viewBox)
    viewBox = viewBox.split(" ")

    var cx = parseFloat(viewBox[0]) + parseFloat(viewBox[2]) / 2
    var cy = parseFloat(viewBox[1]) + parseFloat(viewBox[3]) / 2

    var x = cx - bbox.x - bbox.width / 2
    var y = cy - bbox.y - bbox.height / 2
    var matrix = "1 0 0 1 " + x + " " + y
    this.svgNative.setAttribute("transform", "matrix(" + matrix + ")")
  }

  finalizeShip(shipLoad) {
    shipLoad = shipLoad.slice(0)
    shipLoad = shipLoad.replace("Layer_1", "Layer_1-" + Math.random())
    let data = shipLoad.replace(/ChangeName/g, "id" + this.ship.id)
    data = data.replace(/cls-/g, "id" + this.ship.id + "-")
    this.appState.changedOne = true

    data = this.getColors(data)
    this.wrapper.nativeElement.innerHTML = data
    this.svgNative = this.wrapper.nativeElement.children[0]

    if (this.ship.primaryWeapon[0] == "B") {
      this.svgNative.children["CENTER_CANNON"].innerHTML = ""
      // if (this.ship.primaryWeapon[5] != "F") {
      //   svgNative.children["WING_CANNON_1"].innerHTML = ""
      //   let cannon2 = svgNative.children["WING_CANNON_2"]
      //   if (cannon2) {
      //     cannon2.innerHTML = ""
      //   }
      // }
    } else {
      this.svgNative.children["WING_CANNON_1"].innerHTML = ""
      let cannon2 = this.svgNative.children["WING_CANNON_2"]
      if (cannon2) {
        cannon2.innerHTML = ""
      }
    }
    // this.positionEleToCenter()
  }

  goToShip(e, id) {
    e.preventDefault()
    this.navCtrl.setRoot("ShipPage", { id: id })
    this.appState.activePage = "/ship"
  }

  ionViewDidLoad() {}

  getColors(data) {
    let primaryColor =
      "rgb(" +
      this.ship.primaryColor[0] +
      "," +
      this.ship.primaryColor[1] +
      "," +
      this.ship.primaryColor[2] +
      ")"
    let secondaryColor =
      "rgb(" +
      this.ship.secondaryColor[0] +
      "," +
      this.ship.secondaryColor[1] +
      "," +
      this.ship.secondaryColor[2] +
      ")"

    if (this.ship.secondaryWeapon[0] == "B") {
      let ind = data.indexOf("fill:#")
      data = data.replace(data.substring(ind + 5, ind + 12), secondaryColor)
      data = data.replace(/PrimaryColor/g, primaryColor)
      data = data.replace(/SecondaryColor/g, primaryColor)
    } else {
      data = data.replace(/PrimaryColor/g, primaryColor)
      data = data.replace(/SecondaryColor/g, secondaryColor)
    }
    return data
  }

  doneLoading() {
    console.log("loading")
    this.svg.nativeElement.style = "--secondary-color: green;"
    let gradient = this.wrapper.nativeElement.children[0].contentDocument.all[1]
      .children[1]
    if (gradient && this.ship.secondaryWeapon) {
      if (this.ship.secondaryWeapon[0] == "B") {
        gradient.children[1].attributes[1].value =
          "rgb(" +
          this.ship.primaryColor[0] +
          "," +
          this.ship.primaryColor[1] +
          "," +
          this.ship.primaryColor[2] +
          ")"
        gradient.children[0].attributes[1].value =
          "rgb(" +
          this.ship.primaryColor[0] +
          "," +
          this.ship.primaryColor[1] +
          "," +
          this.ship.primaryColor[2] +
          ")"
        console.log(
          this.svg.nativeElement.contentDocument.all[1].children[0].sheet
        )
        this.svg.nativeElement.contentDocument.all[1].children[0].sheet.rules[0].style.fill =
          "rgb(" +
          this.ship.secondaryWeapon[0] +
          "," +
          this.ship.secondaryWeapon[1] +
          "," +
          this.ship.secondaryWeapon[2] +
          ")"
      } else {
        gradient.children[1].attributes[1].value =
          "rgb(" +
          this.ship.primaryColor[0] +
          "," +
          this.ship.primaryColor[1] +
          "," +
          this.ship.primaryColor[2] +
          ")"
        gradient.children[0].attributes[1].value =
          "rgb(" +
          this.ship.secondaryWeapon[0] +
          "," +
          this.ship.secondaryWeapon[1] +
          "," +
          this.ship.secondaryWeapon[2] +
          ")"
      }
      if (this.ship.primaryWeapon[0] == "B") {
        this.svg.nativeElement.contentDocument.all["CENTER_CANNON"].innerHTML =
          ""
        if (this.ship.primaryWeapon[5] != "F") {
          let cannon2 = this.svg.nativeElement.contentDocument.all[
            "WING_CANNON_2"
          ]
          if (cannon2) {
            cannon2.innerHTML = ""
          }
        }
      } else {
        this.svg.nativeElement.contentDocument.all["WING_CANNON_1"].innerHTML =
          ""
        let cannon2 = this.svg.nativeElement.contentDocument.all[
          "WING_CANNON_2"
        ]
        if (cannon2) {
          cannon2.innerHTML = ""
        }
      }
    }
  }
}
