import { NgModule } from "@angular/core"
import { IonicPageModule } from "ionic-angular"
import { ShipPage } from "./ship"
import { HeaderComponentModule } from "../../components/header/header.module"

@NgModule({
  declarations: [ShipPage],
  imports: [HeaderComponentModule, IonicPageModule.forChild(ShipPage)]
})
export class ShipPageModule {}
