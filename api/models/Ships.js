/**
 * Ships.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: "integer",
      unique: true
    },
    name: {
      type: "string"
    },
    genes: {
      type: "string"
    },
    exclusive: {
      type: "boolean"
    },
    unique: {
      type: "string"
    },
    uniqueNumber: {
      type: "integer"
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
      type: "boolean"
    },
    isReady: {
      type: "boolean"
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
    },
    hullType: {
      type: "integer"
    },
    primaryWeapon: {
      type: "string"
    },
    secondaryWeapon: {
      type: "string"
    },
    primaryColor: {
      type: "json"
    },
    secondaryColor: {
      type: "json"
    }
  }
}
