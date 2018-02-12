import { Component, Input } from "@angular/core"

/**
 * Generated class for the ShipCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "ship-card",
  templateUrl: "ship-card.html"
})
export class ShipCardComponent {
  @Input() ship: Array<{ id: number; name: string; distance: number }>
  text: string

  constructor() {
    this.text = "Hello World"
  }
  ngOnInit() {
    console.log(this.ship)
  }
}
