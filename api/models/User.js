/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoPK: false,
  attributes: {
    id: {
      type: "integer",
      autoIncrement: true
    },
    address: {
      primaryKey: true,
      type: "string",
      unique: true
    },
    username: {
      type: "string"
    },
    email: {
      type: "email"
    }
  }
}
