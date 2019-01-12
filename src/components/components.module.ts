import { NgModule } from "@angular/core"
import { IonicModule } from "ionic-angular"
import { HeaderComponent } from "./header/header"
import { FooterComponent } from "./footer/footer"
import { ShipSelectComponent } from './ship-select/ship-select';
@NgModule({
  declarations: [FooterComponent, HeaderComponent,
    ShipSelectComponent],
  imports: [IonicModule],
  exports: [FooterComponent, HeaderComponent,
    ShipSelectComponent]
})
export class ComponentsModule {}
