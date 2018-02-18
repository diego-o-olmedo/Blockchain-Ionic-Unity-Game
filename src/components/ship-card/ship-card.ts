import { Component, Input, ViewChild, ViewEncapsulation } from "@angular/core"
import { DomSanitizer } from "@angular/platform-browser"
import { AppState } from "../../app/app.service"

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

  constructor(private sanitizer: DomSanitizer, public appState: AppState) {}
  ngOnInit() {
    let shipModel = this.ship.model == 1 ? 1 : 2
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
      this.ship.model == 1 ? this.appState.ship1 : this.appState.ship2
    let data = shipLoad.replace(/ChangeName/g, "id" + this.ship.id)
    data = data.replace(/cls-/g, "id" + this.ship.id + "-")
    this.appState.changedOne = true

    data = this.getColors(data)
    this.wrapper.nativeElement.innerHTML = data
    let svgNative = this.wrapper.nativeElement.children[0]
    if (this.ship.weapon1[0] == "B") {
      svgNative.children["CENTER_CANNON"].innerHTML = ""
      if (this.ship.weapon1[5] != "F") {
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

  ionViewDidLoad() {}

  getColors(data) {
    let color1 =
      "rgb(" +
      this.ship.color1[0] +
      "," +
      this.ship.color1[1] +
      "," +
      this.ship.color1[2] +
      ")"
    let color2 =
      "rgb(" +
      this.ship.color2[0] +
      "," +
      this.ship.color2[1] +
      "," +
      this.ship.color2[2] +
      ")"

    if (this.ship.weapon2[0] == "B") {
      let ind = data.indexOf("fill:#")
      data = data.replace(data.substring(ind + 5, ind + 12), color2)
      data = data.replace(/PrimaryColor/g, color1)
      data = data.replace(/SecondaryColor/g, color1)
    } else {
      data = data.replace(/PrimaryColor/g, color1)
      data = data.replace(/SecondaryColor/g, color2)
    }
    return data
  }

  doneLoading() {
    console.log("loading")
    this.svg.nativeElement.style = "--secondary-color: green;"
    let gradient = this.wrapper.nativeElement.children[0].contentDocument.all[1]
      .children[1]
    if (gradient && this.ship.weapon2) {
      if (this.ship.weapon2[0] == "B") {
        gradient.children[1].attributes[1].value =
          "rgb(" +
          this.ship.color1[0] +
          "," +
          this.ship.color1[1] +
          "," +
          this.ship.color1[2] +
          ")"
        gradient.children[0].attributes[1].value =
          "rgb(" +
          this.ship.color1[0] +
          "," +
          this.ship.color1[1] +
          "," +
          this.ship.color1[2] +
          ")"
        console.log(
          this.svg.nativeElement.contentDocument.all[1].children[0].sheet
        )
        this.svg.nativeElement.contentDocument.all[1].children[0].sheet.rules[0].style.fill =
          "rgb(" +
          this.ship.color2[0] +
          "," +
          this.ship.color2[1] +
          "," +
          this.ship.color2[2] +
          ")"
      } else {
        gradient.children[1].attributes[1].value =
          "rgb(" +
          this.ship.color1[0] +
          "," +
          this.ship.color1[1] +
          "," +
          this.ship.color1[2] +
          ")"
        gradient.children[0].attributes[1].value =
          "rgb(" +
          this.ship.color2[0] +
          "," +
          this.ship.color2[1] +
          "," +
          this.ship.color2[2] +
          ")"
      }
      if (this.ship.weapon1[0] == "B") {
        this.svg.nativeElement.contentDocument.all["CENTER_CANNON"].innerHTML =
          ""
        if (this.ship.weapon1[5] != "F") {
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
