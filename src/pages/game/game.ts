import { Component, ViewChild } from "@angular/core"
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from "ionic-angular"
import { AppState } from "../../app/app.service"

@IonicPage()
@Component({
  selector: "page-game",
  templateUrl: "game.html"
})
export class GamePage {
  msgs: any
  msg: string

  showChat = false

  @ViewChild("chatcontent") chatcontent

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appState: AppState,
    public menuCtrl: MenuController
  ) {
    this.msgs = [
      { username: "0x221", text: "hi" }
      // { username: "user2", text: "hahah" },
      // { username: "namer", text: "sdfsdfsdf" },
      // { username: "koper", text: "hello" },
      // { username: "weibo", text: "hai" }
    ]
  }

  ionViewDidEnter() {
    this.chatcontent.scrollToBottom(1000) //300ms animation speed
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad GamePage")
    console.log(document.getElementById("gameContainer"))
    window["gameInstance"] = window["UnityLoader"].instantiate(
      "gameContainer",
      "/assets/game/Build/unitywebDemo.json",
      { onProgress: window["UnityProgress"] }
    )
    console.log("loaded")
  }

  send(key) {
    if (key == 13) {
      console.log("msg: ", this.msg)
      this.msgs.push({
        username: this.appState.account.substring(0, 5),
        text: this.msg
      })
      this.msg = ""
      setTimeout(() => {
        this.chatcontent.scrollToBottom(300) //300ms animation speed
      }, 100)
    }
  }

  isFullscreen = false
  goFull() {
    let canvaswindow = document.getElementById("canvaswindow")
    let canvasfull = document.getElementById("canvasfull")
    while (canvaswindow.childNodes.length > 0) {
      canvasfull.appendChild(canvaswindow.childNodes[0])
    }
    // document.getElementsByName("canvas")[0].webkitRequestFullScreen()
    window["gameInstance"].SetFullscreen(1)
    this.isFullscreen = true
    let inter = setInterval(() => {
      console.log(1 >= outerHeight - innerHeight)
      if (1 < outerHeight - innerHeight) {
        while (canvasfull.childNodes.length > 0) {
          canvaswindow.appendChild(canvasfull.childNodes[0])
        }
        clearInterval(inter)
      }
    }, 100)
  }

  toggleChat() {
    this.showChat = !this.showChat
    setTimeout(() => {
      let m = this.msgs.pop() //hack to fix chat width
      setTimeout(() => {
        this.msgs.push(m)
      }, 0)
    }, 20)
  }
}
