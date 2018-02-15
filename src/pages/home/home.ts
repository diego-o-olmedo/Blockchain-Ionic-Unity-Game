import { Component } from "@angular/core"
import { NavController } from "ionic-angular"
import { AppState } from "../../app/app.service"
declare let io: any

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  requestedEmail
  requestedName

  constructor(public navCtrl: NavController, public appState: AppState) {
    // if (this.appState.account) {
    //   io.socket.get("/api/user/" + this.appState.account, res => {
    //     if (typeof res == "string") {
    //       console.log(res)
    //       this.isRegistered = false
    //     } else {
    //     }
    //   })
    // }
  }

  ionViewDidLoad() {}

  register() {
    if (this.appState.account) {
      io.socket.post(
        "/api/user",
        {
          username: this.requestedName,
          email: this.requestedEmail,
          address: this.appState.account
        },
        res => {
          console.log("registered")
          this.appState.username = this.requestedName
        }
      )
    }
  }
}
