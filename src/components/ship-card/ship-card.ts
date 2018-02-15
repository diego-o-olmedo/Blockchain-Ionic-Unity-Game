import { Component, Input, ViewChild } from "@angular/core"

@Component({
  selector: "ship-card",
  templateUrl: "ship-card.html"
})
export class ShipCardComponent {
  @Input() ship: any //Array<{ id: number; name: string; distance: number }>
  @ViewChild("svg") svg
  finished = true

  constructor() {
  }
  ngOnInit() {
    // console.log(this.ship)
    // this.svg.nativeElement.contentDocument.getElementById("GradientFill_1-2")
    setTimeout(()=>{
      // console.log(this.svg.nativeElement.contentDocument.all[1].children[1])

      this.finished = true
    }, 2100)
    // console.log("svg=",
    // this.svg.nativeElement.getElementById("GradientFill_1-2"))
  }

   ionViewDidLoad() {
     
   }

   doneLoading() {
           let gradient = this.svg.nativeElement.contentDocument.all[1].children[1]
      if (gradient) {
          if (this.ship.weapon2[0] == "B") {
            gradient.children[1].attributes[1].value = 'rgb(' + this.ship.color1[0] + ',' + this.ship.color1[1] + ',' + this.ship.color1[2] +')'
            gradient.children[0].attributes[1].value = 'rgb(' + this.ship.color1[0] + ',' + this.ship.color1[1] + ',' + this.ship.color1[2] +')'
            // document.getElementsByTagName("style")[0].sheet.rules[3].style.fill
            this.svg.nativeElement.contentDocument.all[1].children[0].sheet.rules[3].style.fill = 'rgb(' + this.ship.color2[0] + ',' + this.ship.color2[1] + ',' + this.ship.color2[2] +')'
          } else {
            gradient.children[1].attributes[1].value = 'rgb(' + this.ship.color1[0] + ',' + this.ship.color1[1] + ',' + this.ship.color1[2] +')'
            gradient.children[0].attributes[1].value = 'rgb(' + this.ship.color2[0] + ',' + this.ship.color2[1] + ',' + this.ship.color2[2] +')'
          }
          if (this.ship.weapon1[0] == "B") {
            this.svg.nativeElement.contentDocument.all["CENTER_CANON"].innerHTML = ""
            if (this.ship.weapon1[5] != "F") {
              this.svg.nativeElement.contentDocument.all["WING_CANON_2"].innerHTML = ""
            }
          } else {
            this.svg.nativeElement.contentDocument.all["WING_CANON_1"].innerHTML = ""
            this.svg.nativeElement.contentDocument.all["WING_CANON_2"].innerHTML = ""
          }
      }
   }
}
