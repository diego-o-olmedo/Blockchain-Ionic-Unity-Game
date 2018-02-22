declare let Auctions
// declare let sails
// declare let Ship

const Web3 = require("web3")
const web3 = new Web3("wss://mainnet.infura.io/ws")
const CoreAbi = [
  {
    constant: true,
    inputs: [{ name: "_id", type: "uint256" }],
    name: "getKitty",
    outputs: [
      { name: "isGestating", type: "bool" },
      { name: "isReady", type: "bool" },
      { name: "cooldownIndex", type: "uint256" },
      { name: "nextActionAt", type: "uint256" },
      { name: "siringWithId", type: "uint256" },
      { name: "birthTime", type: "uint256" },
      { name: "matronId", type: "uint256" },
      { name: "sireId", type: "uint256" },
      { name: "generation", type: "uint256" },
      { name: "genes", type: "uint256" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
]

const CoreAddress = "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d"
const CoreContract = new web3.eth.Contract(CoreAbi, CoreAddress)

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

const AuctionContract = new web3.eth.Contract(AuctionAbi, AuctionAddress)
// console.log(CoreContract)
// Or pass a callback to start watching immediately
// AuctionContract.getPastEvents(
//   "allEvents",
//   {
//     // Using an array means OR: e.g. 20 or 23
//     fromBlock: 5119460,
//     toBlock: "latest"
//   },
//   (error, events) => {
//     // console.log(events)
//     if (events) {
//       events.forEach(result => {
//         // web3.eth
//         //   .call({
//         //     to: AuctionAddress,
//         //     data: AuctionContract.methods.getAuction(
//         //       result.returnValues.tokenId
//         //     )
//         //   })
//         //   .then(getAuction => {
//         //     console.log(getAuction)
//         //   })
//         // AuctionContract.methods
//         //   .getAuction(result.returnValues.tokenId)
//         //   .call()
//         //   .then(auctionRes => {
//         //     console.log(auctionRes)
//         //   })
//         // Ship.AuctionEvent(result)
//       })
//     }
//   }
// )

let auctionWatch = AuctionContract.events.allEvents({
  fromBlock: "latest"
})
sails.log("created auction")
auctionWatch.subscribe(function(error, result) {
  if (result) {
    Ship.AuctionEvent(result)
  } else {
    console.log(error)
  }
})

module.exports = {
  AuctionEvent: function(result, isPast = false) {
    let res = result.returnValues
    if (result.event == "AuctionCreated") {
      Auctions.create({
        id: res.tokenId,
        transaction: result.transactionHash,
        startPrice: res.startingPrice,
        endPrice: res.endingPrice,
        currentPrice: res.startingPrice,
        duration: res.duration,
        end: parseInt(res.duration) + Math.ceil(new Date().getTime() / 1000)
      }).exec(function(err, newAuction) {
        if (err) {
          console.log("create has error")
        } else {
          console.log("auction created success")
        }
      })
    } else if (result.event == "AuctionCancelled") {
      console.log("destroy ", res.tokenId)
      Auctions.destroy({ id: res.tokenId }).exec(function(err) {})
    } else if (result.event == "AuctionSuccessful") {
      console.log("destroy ", res.tokenId)
      Auctions.destroy({ id: res.tokenId }).exec(function(err) {})
    }
  },
  stats: function(r) {
    let rgb1 = []
    let rgb2 = []
    let j = 0
    for (let i = 0; i <= 2; i++) {
      rgb1[i] = Math.floor((r.gene[j++] + r.gene[j++]) * 2.5)
    }
    for (let i = 0; i <= 2; i++) {
      rgb2[i] = Math.floor((r.gene[j++] + r.gene[j++]) * 2.5)
    }
    let modelPoint = r.gene.charAt(r.gene.length - 1)
    let model = Math.floor(modelPoint / 5)
    let weapon1List = [
      "Bolt Basic",
      "Bolt Poison",
      "Bolt Fire",
      "Bolt Lightning",
      "Bolt Ice",
      "Laser Basic",
      "Bolt Void",
      "Bolt Speed",
      "Shotgun Blast",
      "Bolt Torpor",
      "Bolt Weakening"
    ]
    let weapon2List = [
      "Homing Missile",
      "Pacifist Missile",
      "Basic Mine",
      "Schrodinger's Mine",
      "Black Hole Missile",
      "Corksrew Missile",
      "Heavy Water Missile",
      "Remote Detonate Missile",
      "Laser Sun Burst",
      "Electrical Field"
    ]

    r["model"] = model
    r["size"] = "Small"
    r["color1"] = rgb1
    r["color2"] = rgb2
    r["weapon1"] = weapon1List[parseInt(r.gene[j++])]
    r["weapon2"] = weapon2List[parseInt(r.gene[j++])]
    return r
  },

  get: function(id, name) {
    return new Promise(function(resolve, reject) {
      CoreContract.methods.getKitty(id).call({}, (err, res) => {
        if (err) {
          console.log(err)
        } else {
          resolve({ id: id, name: name, gene: res[9].toString(10) })
        }
      })
    })
  }
}
