import { NgModule } from "@angular/core"
import { IonicPageModule } from "ionic-angular"
import { ProfilePage } from "./profile"
import { ShipCardComponentModule } from "../../components/ship-card/ship-card.module"
import { DirectivesModule } from "../../directives/directives.module"
import { ComponentsModule } from "../../components/components.module"

@NgModule({
  declarations: [ProfilePage],
  imports: [
    ComponentsModule,
    DirectivesModule,
    ShipCardComponentModule,
    IonicPageModule.forChild(ProfilePage)
  ]
})
export class ProfilePageModule {}
