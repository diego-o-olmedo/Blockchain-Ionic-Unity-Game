import { NgModule } from "@angular/core"
import { IonicPageModule } from "ionic-angular"
import { ShipPage } from "./ship"
import { ComponentsModule } from "../../components/components.module"
import { ShipCardComponentModule } from "../../components/ship-card/ship-card.module"

@NgModule({
  declarations: [ShipPage],
  imports: [
    ShipCardComponentModule,
    ComponentsModule,
    IonicPageModule.forChild(ShipPage)
  ]
})
export class ShipPageModule {}
