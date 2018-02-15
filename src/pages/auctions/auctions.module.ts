import { NgModule } from "@angular/core"
import { IonicPageModule } from "ionic-angular"
import { AuctionsPage } from "./auctions"
import { ComponentsModule } from "../../components/components.module"

import { HeaderComponentModule } from "../../components/header/header.module"
@NgModule({
  declarations: [AuctionsPage],
  imports: [
    ComponentsModule,
    HeaderComponentModule,
    IonicPageModule.forChild(AuctionsPage)
  ]
})
export class AuctionsPageModule {}
