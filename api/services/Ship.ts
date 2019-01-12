// declare var Auctions: any
// declare var sails: any
// declare var Ship: any
// declare var Ships: any
// declare var ShipsModel: any

const RateLimiter = require("limiter").RateLimiter;
const limiter = new RateLimiter(1, 10);
const Web3 = require("web3");

// const web3 = new Web3("https://mainnet.infura.io")
// web3.currentProvider.sendAsync = function() {
//   return web3.currentProvider.send.apply(web3.currentProvider, arguments)
// }
let web3 = new Web3("wss://mainnet.infura.io/ws"); //to do todo web3 1.0
let web3static = new Web3("https://mainnet.infura.io"); //to do todo web3 1.0

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
];

const CoreAddress = "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d";

// const CoreContract = web3.eth.contract(CoreAbi).at(CoreAddress)
const CoreContract = new web3static.eth.Contract(CoreAbi, CoreAddress); //to do todo web3 1.0

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
];

const AuctionAddress = "0xb1690C08E213a35Ed9bAb7B318DE14420FB57d8C";

// const AuctionContract = web3.eth.contract(AuctionAbi).at(AuctionAddress)
const AuctionContract = new web3.eth.Contract(AuctionAbi, AuctionAddress); //to do todo web3 1.0

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

// let auctionWatch = AuctionContract.events.allEvents({
//   //to do todo web3 1.0
//   fromBlock: "latest"
// })
// auctionWatch.subscribe(function(error, result) {
//   if (result) {
//     Ship.AuctionEvent(result)
//   } else {
//     console.log(error)
//   }
// })
let id = 0;
function all() {
  Ship.getFull(++id).then(res => {
    // console.log(res)
    Ship.shipDB(id, res);
    all();
  });
}
// setTimeout(() => {
//   all()
// }, 4000)
function listenToEvent() {
  console.log("Started listen");
  AuctionContract.events
    .allEvents(
      {
        toBlock: "latest"
      },
      (error, event) => {
        // console.log(event)
      }
    )
    .on("data", event => {
      Ship.AuctionEvent(event);
      // console.log("--contract.events.SomeEvent--")
    })
    .on("changed", event => {
      console.log("--SomeEvent--Changed");
    })
    .on("error", e => {
      console.log("--SomeEvent--Error");
      // console.log(e)
      web3.setProvider(
        new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws")
      );
      web3.eth.net
        .isListening()
        .then(() => {
          console.log("is connected");
          listenToEvent();
        })
        .catch(e => console.log("Wow. Something went wrong"));
      // console.log(web3)
    });
  console.log("listening");
}
// listenToEvent()
// setInterval(() => {
//   console.log("keep alive")
//   Ship.get(1, "test")
// }, 30000)
// let events = AuctionContract.allEvents(
//   { fromBlock: "latest" },
//   (error, result) => {
//     if (result) {
//       Ship.AuctionEvent(result)
//     } else {
//       console.log(error)
//     }
//   }
// )

// var events = AuctionContract.allEvents({
//   fromBlock: 5136927,
//   toBlock: "latest"
// })
// events.watch(function(error, result) {
//   if (result) {
//     Ship.AuctionEvent(result)
//   } else {
//     console.log(error)
//   }
// })
sails.log("created auction");

module.exports = {
  AuctionEvent: function(result, isPast = false) {
    let res = result.returnValues;
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
          console.log("create has error");
        } else {
          console.log("auction created success");
        }
      });
    } else if (result.event == "AuctionCancelled") {
      console.log("destroy ", res.tokenId);
      Auctions.destroy({ id: res.tokenId }).exec(function(err) {});
    } else if (result.event == "AuctionSuccessful") {
      console.log("destroy ", res.tokenId);
      Auctions.destroy({ id: res.tokenId }).exec(function(err) {});
    }
  },
  stats: function(r, raw = false) {
    let rgb1 = [];
    let rgb2 = [];
    let j = 0;
    for (let i = 0; i <= 2; i++) {
      rgb1[i] = Math.floor((r.gene[j++] + r.gene[j++]) * 2.5);
    }
    for (let i = 0; i <= 2; i++) {
      rgb2[i] = Math.floor((r.gene[j++] + r.gene[j++]) * 2.5);
    }
    let modelPoint = r.gene.charAt(r.gene.length - 1);
    let model = Math.floor(modelPoint / 1.81);
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
    ];
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
    ];

    if (raw) {
      const rgbToHex = (r, g, b) =>
        "#" +
        [r, g, b]
          .map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
          })
          .join("");
      return {
        model: model,
        size: 0.8,
        primaryColor: rgbToHex(rgb1[0], rgb1[1], rgb1[2]),
        secondaryColor: rgbToHex(rgb2[0], rgb2[1], rgb2[2]),
        primaryWeapon: parseInt(r.gene[j++]),
        secondaryWeapon: parseInt(r.gene[j++])
      };
    } else {
      r["model"] = model;
      r["size"] = "Small";
      r["primaryColor"] = rgb1;
      r["secondaryColor"] = rgb2;
      r["primaryWeapon"] = weapon1List[parseInt(r.gene[j++])];
      r["secondaryWeapon"] = weapon2List[parseInt(r.gene[j++])];
    }
    return r;
  },

  shipDB: function(id, res) {
    let r = Ship.stats({ gene: res[9] });
    Ships.create({
      id: id,
      name: "pHolder",
      genes: res[9],
      generation: res[8],
      currentowner: null,
      dna: r,
      kills: 0,
      deaths: 0,
      isGestating: res[0],
      isReady: res[1],
      nextAuctionAt: res[3],
      siringWithId: res[4],
      birthTime: res[5],
      matronId: res[6],
      sireId: res[7],
      hullType: r.model,
      primaryWeapon: r.primaryWeapon,
      secondaryWeapon: r.secondaryWeapon,
      primaryColor: r.primaryColor,
      secondaryColor: r.secondaryColor
    }).exec(function(err, newAuction) {
      if (err) {
        console.log(id, "create has error");
        console.log(err);
      } else {
        console.log(id + " created success");
      }
    });
  },

  getFull: function(id, name) {
    return new Promise((resolve, reject) => {
      CoreContract.methods.getKitty(id).call({}, (err, res) => {
        //to do todo web3 1.0
        if (err) {
          console.log(err);
        } else {
          console.log("got the id", id);
          resolve(res);
        }
      });
    });
  },

  get: function(id, name) {
    return new Promise((resolve, reject) => {
      // limiter.removeTokens(1, () => {
      console.log("tryering", id);
      CoreContract.methods.getKitty(id).call({}, (err, res) => {
        //to do todo web3 1.0
        if (err) {
          console.log(err);
        } else {
          console.log("got the id", id);
          resolve({ id: id, name: name, gene: res[9].toString(10) });
        }
      });
      // })

      // CoreContract.getKitty(id, (err, res) => {
      //   if (err) {
      //     console.log(err)
      //   } else {
      //     resolve({ id: id, name: name, gene: res[9].toString(10) })
      //   }
      // })
    });
  }
};
