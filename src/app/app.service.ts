import { Injectable } from "@angular/core"
import { Events } from "ionic-angular"
declare let io: any

@Injectable()
export class AppState {
  _state = {}
  web3 = window["web3"]
  account
  checkAccount
  accountStatus = "Loading..."
  username = false

  constructor(public events: Events) {
    if (!this.web3) {
      this.accountStatus = "No MetaMask extension installed"
    } else if (this.web3.eth.accounts.length == 0) {
      this.accountStatus = "MetaMask account is locked!"
      this.startCheck()
    } else {
      this.account = this.web3.eth.accounts[0]
      this.accountStatus = this.account
      this.getUser()
      this.startCheck()
    }
    // this.web3.eth.getAccounts(console.log)
  }

  getUser() {
    if (io) {
      io.socket.get("/api/user/" + this.account, res => {
        if (typeof res == "string") {
        } else {
          this.username = res.username
        }
      })
    }
  }

  startCheck() {
    if (!this.checkAccount) {
      this.checkAccount = setInterval(() => {
        if (this.account != this.web3.eth.accounts[0]) {
          this.account = this.web3.eth.accounts[0]
          if (typeof this.account == "string") {
            this.accountStatus = this.account
            this.getUser()
          } else {
            this.accountStatus = "MetaMask account is locked!"
          }
          this.events.publish("account:changed", this.account)
        }
      }, 100)
    }
  }
  // already return a clone of the current state
  get state() {
    return (this._state = this._clone(this._state))
  }
  // never allow mutation
  set state(value) {
    throw new Error("do not mutate the `.state` directly")
  }

  get(prop?: any) {
    // use our state getter for the clone
    const state = this.state
    return state.hasOwnProperty(prop) ? state[prop] : state
  }

  set(prop: string, value: any) {
    // internally mutate our state
    return (this._state[prop] = value)
  }

  _clone(object) {
    // simple object clone
    return JSON.parse(JSON.stringify(object))
  }
}
