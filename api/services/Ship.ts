const Web3 = require("web3")
const web3 = new Web3("https://mainnet.infura.io/")
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

module.exports = {
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
    let model = Math.floor(modelPoint / 4)
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
      "Hominh Missile",
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
