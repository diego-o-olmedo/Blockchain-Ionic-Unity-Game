import { NgModule } from "@angular/core"
import { IonicPageModule } from "ionic-angular"
import { MyShipsPage } from "./my-ships"
// import { HeaderComponentModule } from "../../components/header/header"
import { ShipCardComponentModule } from "../../components/ship-card/ship-card.module"
import { DirectivesModule } from "../../directives/directives.module"
import { ComponentsModule } from "../../components/components.module"

@NgModule({
  declarations: [MyShipsPage],
  imports: [
    DirectivesModule,
    ComponentsModule,
    ShipCardComponentModule,
    IonicPageModule.forChild(MyShipsPage)
  ]
})
export class MyShipsPageModule {}
