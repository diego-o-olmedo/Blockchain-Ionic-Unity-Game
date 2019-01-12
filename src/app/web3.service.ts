import { Injectable } from "@angular/core"
import { Events, ToastController } from "ionic-angular"
declare let io: any

const AuctionAbi = [
  {
    constant: false,
    inputs: [
      { name: "_tokenId", type: "uint256" },
      { name: "_startingPrice", type: "uint256" },
      { name: "_endingPrice", type: "uint256" },
      { name: "_duration", type: "uint256" },
      { name: "_seller", type: "address" }
    ],
    name: "createAuction",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "unpause",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_tokenId", type: "uint256" }],
    name: "bid",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "lastGen0SalePrices",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "paused",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "withdrawBalance",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "_tokenId", type: "uint256" }],
    name: "getAuction",
    outputs: [
      { name: "seller", type: "address" },
      { name: "startingPrice", type: "uint256" },
      { name: "endingPrice", type: "uint256" },
      { name: "duration", type: "uint256" },
      { name: "startedAt", type: "uint256" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "ownerCut",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "pause",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "isSaleClockAuction",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_tokenId", type: "uint256" }],
    name: "cancelAuctionWhenPaused",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "gen0SaleCount",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_tokenId", type: "uint256" }],
    name: "cancelAuction",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "_tokenId", type: "uint256" }],
    name: "getCurrentPrice",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "nonFungibleContract",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "averageGen0SalePrice",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { name: "_nftAddr", type: "address" },
      { name: "_cut", type: "uint256" }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "tokenId", type: "uint256" },
      { indexed: false, name: "startingPrice", type: "uint256" },
      { indexed: false, name: "endingPrice", type: "uint256" },
      { indexed: false, name: "duration", type: "uint256" }
    ],
    name: "AuctionCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "tokenId", type: "uint256" },
      { indexed: false, name: "totalPrice", type: "uint256" },
      { indexed: false, name: "winner", type: "address" }
    ],
    name: "AuctionSuccessful",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: "tokenId", type: "uint256" }],
    name: "AuctionCancelled",
    type: "event"
  },
  { anonymous: false, inputs: [], name: "Pause", type: "event" },
  { anonymous: false, inputs: [], name: "Unpause", type: "event" }
]

const AuctionAddress = "0xb1690C08E213a35Ed9bAb7B318DE14420FB57d8C"

@Injectable()
export class Web3Service {
  web3 = window["web3"]
  AuctionContract
  _state = {}

  constructor(public events: Events, private toastCtrl: ToastController) {
    let KittContract = this.web3.eth.contract(AuctionAbi)
    this.AuctionContract = KittContract.at(AuctionAddress)
  }

  purchase(id) {
    this.AuctionContract.bid(
      id,
      {
        value: this.web3.toWei(0.05, "ether"),
        gasPrice: this.web3.toWei("5", "gwei")
      },
      (err, res) => {
        console.log("called back", err, res)
      }
    )
  }

  sell(id, start, end, duration) {
    start = this.web3.toWei(start, "ether")
    end = this.web3.toWei(end, "ether")
    duration *= 86400
    console.log(this.web3.eth.accounts[0])
    console.log(start, end, duration)
    this.AuctionContract.createAuction(
      id,
      start,
      end,
      duration,
      null,
      {
        gasPrice: this.web3.toWei("5", "gwei")
      },
      (err, res) => {
        console.log("called back", err, res)
      }
    )
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
