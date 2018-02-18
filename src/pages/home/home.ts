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
  status
  success

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
    console.log("home loaded")
  }

  ionViewDidLoad() {}

  register() {
    console.log("clicked register", this.appState.account)
    if (this.appState.account) {
      console.log("posting")
      io.socket.post(
        "/api/user",
        {
          username: this.requestedName,
          email: this.requestedEmail,
          address: this.appState.account
        },
        res => {
          console.log(res)
          if (!res.status) {
            this.appState.username = res.username
            this.success = true
          } else if (res.status == 400) {
            this.status = res.details
          } else {
            this.status = res.details
          }
        }
      )
    }
  }
}
