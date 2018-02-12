import { NgModule } from "@angular/core"
import { IonicPageModule } from "ionic-angular"
import { AuctionsPage } from "./auctions"

import { HeaderComponentModule } from "../../components/header/header.module"
@NgModule({
  declarations: [AuctionsPage],
  imports: [HeaderComponentModule, IonicPageModule.forChild(AuctionsPage)]
})
export class AuctionsPageModule {}
