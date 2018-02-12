import { NgModule } from "@angular/core"
import { IonicModule } from "ionic-angular"
import { HeaderComponent } from "./header"
import { DirectivesModule } from "../../directives/directives.module"
@NgModule({
  declarations: [HeaderComponent],
  imports: [DirectivesModule, IonicModule],
  exports: [HeaderComponent]
})
export class HeaderComponentModule {}
