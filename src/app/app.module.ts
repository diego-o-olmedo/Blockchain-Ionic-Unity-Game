import { BrowserModule } from "@angular/platform-browser"
import { ErrorHandler, NgModule } from "@angular/core"
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular"
import { HttpModule } from "@angular/http"
import { AppState } from "./app.service"

import { MyApp } from "./app.component"
import { HomePage } from "../pages/home/home"
import { HeaderComponentModule } from "../components/header/header.module"
import { ComponentsModule } from "../components/components.module"

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    HeaderComponentModule,
    ComponentsModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      // locationStrategy: "path"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [AppState, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
