import { HomePage } from './home';
import { NgModule } from "@angular/core"
import { IonicPageModule } from "ionic-angular"
// import { HeaderComponentModule } from "../../components/header/header"
import { ShipCardComponentModule } from "../../components/ship-card/ship-card.module"
import { DirectivesModule } from "../../directives/directives.module"
import { ComponentsModule } from "../../components/components.module"
import { NgxPaginationModule } from "ngx-pagination" // <-- import the module

@NgModule({
  declarations: [HomePage],
  imports: [
    NgxPaginationModule,
    DirectivesModule,
    ComponentsModule,
    ShipCardComponentModule,
    IonicPageModule.forChild(HomePage)
  ]
})
export class HomePageModule { }
