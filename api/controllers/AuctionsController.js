module.exports = {
  auction: function(req, res) {
    Auctions.find({
      sort: "end ASC",
      limit: 12
    }).exec(function(err, records) {
      let count = 0
      let result = { count: records.length }
      records.forEach(record => {
        Ship.get(record.id, "pName").then(stats => {
          count++
          sails.log("got", record.id)
          record["stats"] = Ship.stats(stats)
          if (count == records.length) {
            result["auctions"] = records
            res.json(result)
          }
        })
      })
      //   res.json(records)
    })
    // Ship.get(data.id, data.name).then(stats => {
    //   sails.log.debug(stats)
    //   res.json(Ship.stats(stats))
    // })
  }
}
