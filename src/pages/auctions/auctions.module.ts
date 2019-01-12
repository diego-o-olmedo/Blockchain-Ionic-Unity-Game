import { NgModule } from "@angular/core"
import { IonicPageModule } from "ionic-angular"
import { AuctionsPage } from "./auctions"
import { ComponentsModule } from "../../components/components.module"
import { ShipCardComponentModule } from "../../components/ship-card/ship-card.module"

@NgModule({
  declarations: [AuctionsPage],
  imports: [
    ShipCardComponentModule,
    ComponentsModule,
    IonicPageModule.forChild(AuctionsPage)
  ]
})
export class AuctionsPageModule {}
