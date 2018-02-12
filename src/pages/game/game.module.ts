import { NgModule } from "@angular/core"
import { IonicPageModule } from "ionic-angular"
import { GamePage } from "./game"

import { HeaderComponentModule } from "../../components/header/header.module"
@NgModule({
  declarations: [GamePage],
  imports: [HeaderComponentModule, IonicPageModule.forChild(GamePage)]
})
export class GamePageModule {}
