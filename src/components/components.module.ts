import { NgModule } from "@angular/core"
import { IonicModule } from "ionic-angular"
import { HeaderComponent } from "./header/header"
import { FooterComponent } from "./footer/footer"
@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [IonicModule],
  exports: [FooterComponent, HeaderComponent]
})
export class ComponentsModule {}
