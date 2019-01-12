import { NgModule } from "@angular/core"
import { IonicPageModule } from "ionic-angular"
import { CombinePage } from "./combine"
import { ComponentsModule } from "../../components/components.module"

@NgModule({
  declarations: [CombinePage],
  imports: [ComponentsModule, IonicPageModule.forChild(CombinePage)]
})
export class CombinePageModule {}
