import { NgModule } from "@angular/core"
import { IonicPageModule } from "ionic-angular"
import { ShipPage } from "./ship"
import { ComponentsModule } from "../../components/components.module"

@NgModule({
  declarations: [ShipPage],
  imports: [ComponentsModule, IonicPageModule.forChild(ShipPage)]
})
export class ShipPageModule {}
