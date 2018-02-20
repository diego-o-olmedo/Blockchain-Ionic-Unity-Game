/**
 * Auctions.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoPK: false,
  attributes: {
    auctionId: {
      type: "integer",
      autoIncrement: true
    },
    id: {
      type: "integer"
    },
    transaction: {
      primaryKey: true,
      type: "string",
      unique: true
    },
    startPrice: {
      type: "string"
    },
    endPrice: {
      type: "string"
    },
    currentPrice: {
      type: "string"
    },
    duration: {
      type: "string"
    },
    end: {
      type: "integer"
    }
  }
}
