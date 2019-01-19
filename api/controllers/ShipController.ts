declare let sails: any;
declare let Ship: any;
const axios = require("axios");

function getUrl(url) {
  return new Promise(function(resolve, reject) {
    axios
      .get(url)
      .then(function(response) {
        resolve(response.data);
      })
      .catch(function(error) {
        reject(error);
      });
  });
}

module.exports = {
  gameship: function(req, res) {
    let id = req.query.id;
    if (id && id.length > 0) {
      Ship.get(id, "").then(stats => {
        let data = Ship.stats(stats, true);
        res.json(data);
      });
    } else {
      res.json([]);
    }
  },
  ship: function(req, res) {
    let id = req.query.id;
    if (id && id.length > 0) {
      getUrl("http://api.cryptokitties.co/kitties/" + id).then(
        (data: any) => {
          Ship.get(data.id, data.name).then(stats => {
            sails.log.debug(stats);
            res.json(Ship.stats(stats));
          });
        },
        err => {
          res.json([]);
        }
      );
    } else {
      res.json([]);
    }
  },
  shipsRandom: function(req, res) {
    sails.log(req.query);
    let offset = req.query.offset || Math.floor(Math.random() * 10000);
    // let address = req.query.address;
    // sails.log.debug(address);
    // if (address && address != "undefined") {
    getUrl(
      "http://api.cryptokitties.co/kitties?orderDirection=asc&offset=" + offset
    ).then((data: any) => {
      if (data.kitties.length > 0) {
        let response = [];

        let geneObj = [];
        data.kitties.forEach(kitty => {
          Ship.get(kitty.id, kitty.name).then(result => {
            geneObj.push(result);
            if (geneObj.length == data.kitties.length) {
              geneObj.forEach(r => {
                r = Ship.stats(r);
              });
              res.json(geneObj);
            }
          });
        });
      } else {
        let fn = id => {
          return new Promise((resolve, reject) => {
            Ship.get(id, "PlaceHolder Ship").then(r => {
              resolve(Ship.stats(r));
            });
          });
        };
        Promise.all([2, 3, 4].map(fn)).then(data => {
          res.json(data);
        });
      }
    });
  },
  ships: function(req, res) {
    sails.log(req.query);
    let address = req.query.address;
    sails.log.debug(address);
    if (address && address != "undefined") {
      getUrl(
        "http://api.cryptokitties.co/kitties?owner_wallet_address=" + address
      ).then((data: any) => {
        if (data.kitties.length > 0) {
          let response = [];

          let geneObj = [];
          data.kitties.forEach(kitty => {
            Ship.get(kitty.id, kitty.name).then(result => {
              geneObj.push(result);
              if (geneObj.length == data.kitties.length) {
                geneObj.forEach(r => {
                  r = Ship.stats(r);
                });
                res.json(geneObj);
              }
            });
          });
        } else {
          let fn = id => {
            return new Promise((resolve, reject) => {
              Ship.get(id, "Placeholder Ship").then(r => {
                resolve(Ship.stats(r));
              });
            });
          };
          Promise.all([2, 3, 4].map(fn)).then(data => {
            res.json(data);
          });
        }
      });
    } else {
      let fn = id => {
        return new Promise((resolve, reject) => {
          Ship.get(id, "Placeholder Ship").then(r => {
            resolve(Ship.stats(r));
          });
        });
      };
      Promise.all([1, 5475, 5476].map(fn)).then(data => {
        res.json(data);
      });
    }
  }
};

function getDefault() {
  let tbl = [];

  // Ship.get(1, "Starter ShipA").then(stats => {
  //   tbl.push(stats)
  // })
  // Ship.get(48, "Starter ShipB").then(stats => {
  //   tbl.push(stats)
  // })
  // Ship.get(51, "Starter ShipC").then(stats => {
  //   tbl.push(stats)
  //   return tbl
  // })
  return [
    {
      id: 1,
      name: "Starter ShipA",
      model: 0,
      size: "Large",
      primaryColor: [112, 195, 122],
      secondaryColor: [47, 247, 215],
      primaryWeapon: "Shotgun Blast",
      secondaryWeapon: "Homing Missile"
    },
    {
      id: 49,
      name: "Starter ShipB",
      model: 1,
      size: "Large",
      primaryColor: [11, 215, 55],
      secondaryColor: [128, 55, 111],
      primaryWeapon: "Shotgun Blast",
      secondaryWeapon: "Homing Missile"
    },
    {
      id: 522222231311,
      name: "Starter ShipB",
      model: 10,
      size: "Small",
      primaryColor: [252, 70, 107],
      secondaryColor: [63, 94, 251],
      primaryWeapon: "Void Bolt",
      secondaryWeapon: "Sun Burst Laser"
    }
  ];
}
