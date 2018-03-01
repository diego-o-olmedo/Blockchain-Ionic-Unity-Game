/**
 * Ships.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    attributes: {
      id: {
        type: "integer"
      },
      name: {
        type: "string"
      },
      genes: {
        type: "string"
      },
      generation: {
        type: "integer"
      },
      cooldown: {
        type: "integer"
      },
      currentowner: {
        type: "string"
      },
      dna: {
        type: "json"
      },
      kills: {
        type: "integer"
      },
      deaths: {
        type: "integer"
      },
      isGestating: {
        type: "bool"
      },
      isReady: {
        type: "bool"
      },
      nextAuctionAt: {
        type: "integer"
      },
      siringWithId: {
        type: "integer"
      },
      birthTime: {
        type: "integer"
      },
      matronId: {
        type: "integer"
      },
      sireId: {
        type: "integer"
      }
    }
  }
}
