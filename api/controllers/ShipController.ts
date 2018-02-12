const axios = require("axios")
var Web3 = require("web3")
var web3 = new Web3("https://mainnet.infura.io/")

module.exports = {
  ships: function(req, res) {
    sails.log(req.query)
    let address = req.query.address
    sails.log.debug(address)
    if (address && address != "undefined") {
      cryptoKitties(address).then(data => {
        if (data.kitties.length > 0) {
          let response = []
          GetGenes(data).then(result => {
            result.forEach(r => {
              let modelPoint = r.gene.charAt(r.gene.length - 1)
              let model = Math.floor(modelPoint / 4)
              r["model"] = model
              r["size"] = "Small"
              r["color1"] = "Green"
              r["color2"] = "Red"
            })
            res.json(result)
          })
        } else {
          res.json(getDefault())
        }
      })
    } else {
      res.json(getDefault())
    }
  }
}

function getDefault() {
  return [
    {
      id: 777,
      name: "Placeholder Ship1",
      model: 0,
      size: "Small",
      color1: "Blue",
      color2: "Orange"
    },
    {
      id: 333,
      name: "Placeholder Ship2",
      model: 1,
      size: "Large",
      color1: "Blue",
      color2: "Green"
    },
    {
      id: 123,
      name: "Placeholder Ship3",
      model: 2,
      size: "Normal",
      color1: "Pink",
      color2: "Red"
    }
  ]
}
function cryptoKitties(address) {
  let url =
    "http://api.cryptokitties.co/kitties?owner_wallet_address=" + address
  return new Promise(function(resolve, reject) {
    axios
      .get(url)
      .then(function(response) {
        resolve(response.data)
      })
      .catch(function(error) {
        reject(error)
      })
  })
}

function GetGenes(data) {
  var coreAbi = [
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
  var coreAddress = "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d"

  var geneObj = []
  var CoreContract = new web3.eth.Contract(coreAbi, coreAddress)
  //   var instance = CoreContract.at(coreAddress)
  var counter = 0

  return new Promise(function(resolve, reject) {
    function specKitty(id, name) {
      CoreContract.methods.getKitty(id).call({}, function(err, res) {
        if (err) {
          console.log(err)
        } else {
          counter++
          geneObj.push({ id: id, name: name, gene: res[9].toString(10) })
          if (counter == data.kitties.length - 1) {
            resolve(geneObj)
          }
        }
      })
    }

    data.kitties.forEach(kitty => {
      specKitty(kitty.id, kitty.name)
    })
  })
  //   for (var i = 0; i < data.kitties.length; i++) {
  //   }
}
