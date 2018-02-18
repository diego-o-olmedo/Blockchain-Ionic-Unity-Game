import { Component, ViewChild } from "@angular/core"
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
  Events,
  Content
} from "ionic-angular"
import { DomSanitizer } from "@angular/platform-browser"
import { AppState } from "../../app/app.service"
declare var io: any

@IonicPage()
@Component({
  selector: "page-game",
  templateUrl: "game.html"
})
export class GamePage {
  gameLoaded = false
  msgs = []
  msg: string
  noAccount = false
  showChat = false
  chatConnected = false
  room
  listening: any
  loadingStyle = this.sanitizer.bypassSecurityTrustStyle("inset(0 100% 0 0)")

  @ViewChild("chatcontent") chatcontent
  @ViewChild(Content) content: Content

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appState: AppState,
    public menuCtrl: MenuController,
    public events: Events,
    private sanitizer: DomSanitizer
  ) {
    // io.socket.on("chatmessage", msg => {
    //   this.msgs.push(msg.data)
    // })
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad GamePage")

    this.loadGame()
    this.events.subscribe("account:changed", account => {
      setTimeout(() => {
        this.loadGame()
      }, 0)
    })
  }

  // public loadingStyle() {
  //   return this.sanitizer.bypassSecurityTrustStyle("inset(0 74% 0 0)")
  // }

  leaveRoom() {
    io.socket.post("/api/v1/chat/leave", { room: this.room }, () => {
      this.room = null
      this.chatConnected = false
    })
  }

  joinRoom(room: string) {
    console.log("join room000")
    io.socket.post("/api/v1/chat/join", { room: room }, () => {
      console.log("joined room " + room)
      this.room = room
      this.chatConnected = true
      if (!this.listening) {
        this.listening = true
        io.socket.on("message", message => {
          if (message) {
            console.log("gotmsg", message)
            this.msgs.push(message)
          } else {
            console.log("why")
          }
        })
      }
    })
  }

  ionViewDidEnter() {
    console.log(this.appState.account)
    this.chatcontent.scrollToBottom(1000) //300ms animation speed
    // io.socket.get("/api/chatMessage", body => {
    //   this.msgs = body
    // })
  }

  ionViewWillLeave() {
    console.log("view leaving")
    // this.goFull(false)
  }

  ionViewWillUnload() {
    console.log("view unloaded")
  }

  loadGameServices() {
    window["UnityProgress"] = (gameInstance, progress) => {
      let calc = 100 - progress * 100
      if (calc == 0) {
        this.gameLoaded = true
      }
      console.log("in ionc=", progress, calc)
      this.loadingStyle = this.sanitizer.bypassSecurityTrustStyle(
        "inset(0 " + calc + "% 0 0)"
      )
    }
    window.addEventListener("room", (e: any) => {
      if (e.detail.join) {
        this.joinRoom(e.detail.room)
      } else {
        if (this.room) {
          this.leaveRoom()
        }
      }
    })
  }

  loadGame() {
    // console.log(document.getElementById("gameContainer"))
    if (this.appState.account && !window["gameInstance"]) {
      this.loadGameServices()
      window["gameInstance"] = window["UnityLoader"].instantiate(
        "gameContainer",
        "/game/Build/unitywebDemo.json",
        { onProgress: window["UnityProgress"] }
      )
      let canvas = document.getElementById("#canvas")
      canvas.tabIndex = 1
    } else {
      console.log("already loaded")
    }
  }

  send(key) {
    if (key == 13) {
      if (this.chatConnected && this.room) {
        // console.log("msg: ", this.msg)
        let msg = {
          username: this.appState.account.substring(0, 5),
          text: this.msg
        }
        // this.msgs.push(msg)

        // io.socket.post("/api/chatMessage", msg, res => {})
        io.socket.post("/api/v1/chat/send", { data: msg, room: this.room })
        this.msg = ""
        setTimeout(() => {
          this.chatcontent.scrollToBottom(300) //300ms animation speed
        }, 50)
      } else {
        this.msg = ""
      }
    }
  }

  isFullscreen = false
  goFull(shouldRevert = true) {
    let canvaswindow = document.getElementById("canvaswindow")
    let canvasfull = document.getElementById("canvasfull")
    while (canvaswindow.childNodes.length > 0) {
      canvasfull.appendChild(canvaswindow.childNodes[0])
    }
    // document.getElementsByName("canvas")[0].webkitRequestFullScreen()
    window["gameInstance"].SetFullscreen(1)
    if (shouldRevert) {
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
  }

  toggleChat() {
    this.showChat = !this.showChat

    this.content.resize()
    // if (this.msgs.length > 0) {
    //   setTimeout(() => {
    //     let m = this.msgs.pop() //hack to fix chat width
    //     setTimeout(() => {
    //       this.msgs.push(m)
    //     }, 0)
    //   }, 20)
    // } else {
    //   // setTimeout(() => {
    //   //   this.msgs.push({ username: "", text: "" }) //hack to fix chat width
    //   //   setTimeout(() => {
    //   //     this.msgs.pop()
    //   //   }, 0)
    //   // }, 20)
    // }
  }
}
