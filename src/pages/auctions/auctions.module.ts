import { NgModule } from "@angular/core"
import { IonicPageModule } from "ionic-angular"
import { AuctionsPage } from "./auctions"
import { ComponentsModule } from "../../components/components.module"

@NgModule({
  declarations: [AuctionsPage],
  imports: [ComponentsModule, IonicPageModule.forChild(AuctionsPage)]
})
export class AuctionsPageModule {}
