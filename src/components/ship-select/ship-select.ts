import { Component, Input, ViewChild, ViewEncapsulation } from "@angular/core"
import { DomSanitizer } from "@angular/platform-browser"
import { AppState } from "../../app/app.service"
import { NavController } from "ionic-angular"

@Component({
  selector: "ship-select",
  templateUrl: "ship-select.html",
  encapsulation: ViewEncapsulation.None
})
export class ShipSelectComponent {
  @Input() ship: any //Array<{ id: number; name: string; distance: number }>
  @ViewChild("svg") svg
  @ViewChild("wrapper") wrapper
  svgUrl

  constructor(
    private sanitizer: DomSanitizer,
    public appState: AppState,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    let shipModel = this.ship.model <= 2 ? 1 : 2
    this.svgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      "/assets/imgs/ships/ship" + shipModel + ".svg"
    )
    // console.log(this.ship)
    // let shipModel = this.ship.model == 1 ? 1 : 2
    // this.svgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    //   "/assets/imgs/ships/ship" + shipModel + ".svg"
    // )
    // console.log(this.wrapper)
    let shipLoad =
      this.ship.model == 1 ? this.appState.ship2 : this.appState.ship1
    let data = shipLoad.replace(/ChangeName/g, "id" + this.ship.id)
    data = data.replace(/cls-/g, "id" + this.ship.id + "-")
    this.appState.changedOne = true

    data = this.getColors(data)
    this.wrapper.nativeElement.innerHTML = data
    let svgNative = this.wrapper.nativeElement.children[0]
    if (this.ship.primaryWeapon[0] == "B") {
      svgNative.children["CENTER_CANNON"].innerHTML = ""
      if (this.ship.primaryWeapon[5] != "F") {
        let cannon2 = svgNative.children["WING_CANNON_2"]
        if (cannon2) {
          cannon2.innerHTML = ""
        }
      }
    } else {
      svgNative.children["WING_CANNON_1"].innerHTML = ""
      let cannon2 = svgNative.children["WING_CANNON_2"]
      if (cannon2) {
        cannon2.innerHTML = ""
      }
    }
    // this.doneLoading()
  }

  selectShip() {
    // this.navCtrl.setRoot("ShipPage", { id: id })
    console.log("clickd", this.ship.model)
    // window["ShowSelect"] = false
    window.dispatchEvent(new CustomEvent("show-select", { detail: false }))
    window["gameInstance"].SendMessage("Web3(Clone)", "GetShip", this.ship.id)
    let canvas = document.getElementById("#canvas")
    canvas.focus()
    canvas.requestPointerLock()
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
          this.ship.secondaryColor[0] +
          "," +
          this.ship.secondaryColor[1] +
          "," +
          this.ship.secondaryColor[2] +
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
          this.ship.secondaryColor[0] +
          "," +
          this.ship.secondaryColor[1] +
          "," +
          this.ship.secondaryColor[2] +
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
