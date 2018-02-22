declare var sails: any
declare var Ship: any
const axios = require("axios")

function getUrl(url) {
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

module.exports = {
  ship: function(req, res) {
    let id = req.query.id
    if (id && id.length > 0) {
      getUrl("http://api.cryptokitties.co/kitties/" + id).then(
        (data: any) => {
          Ship.get(data.id, data.name).then(stats => {
            sails.log.debug(stats)
            res.json(Ship.stats(stats))
          })
        },
        err => {
          res.json([])
        }
      )
    } else {
      res.json([])
    }
  },
  ships: function(req, res) {
    sails.log(req.query)
    let address = req.query.address
    sails.log.debug(address)
    if (address && address != "undefined") {
      getUrl(
        "http://api.cryptokitties.co/kitties?owner_wallet_address=" + address
      ).then((data: any) => {
        if (data.kitties.length > 0) {
          let response = []

          let geneObj = []
          data.kitties.forEach(kitty => {
            Ship.get(kitty.id, kitty.name).then(result => {
              geneObj.push(result)
              if (geneObj.length == data.kitties.length) {
                geneObj.forEach(r => {
                  r = Ship.stats(r)
                })
                res.json(geneObj)
              }
            })
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
      id: 333,
      name: "Starter ShipA",
      model: 1,
      size: "Large",
      color1: [255, 215, 0],
      color2: [128, 0, 128],
      weapon1: "Shotgun Blast",
      weapon2: "Homing Missile"
    },
    {
      id: 777,
      name: "Starter ShipB",
      model: 3,
      size: "Small",
      color1: [252, 70, 107],
      color2: [63, 94, 251],
      weapon1: "Void Bolt",
      weapon2: "Sun Burst Laser"
    }
  ]
}
