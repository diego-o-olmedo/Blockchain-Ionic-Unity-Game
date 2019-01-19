import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { HttpModule } from "@angular/http";
import { AppState } from "./app.service";
import { Web3Service } from "./web3.service";

import { MyApp } from "./app.component";
import { ComponentsModule } from "../components/components.module";
import { NgxPaginationModule } from "ngx-pagination"; // <-- import the module

@NgModule({
  declarations: [MyApp],
  imports: [
    NgxPaginationModule,
    ComponentsModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      locationStrategy: "path"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    AppState,
    Web3Service,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
