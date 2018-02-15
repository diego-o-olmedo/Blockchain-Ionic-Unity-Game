/**
 * ChatMessageController
 *
 * @description :: Server-side logic for managing chatmessages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  join: function(req, res) {
    sails.log.debug("User joine dthis room=" + req.body.room)
    sails.sockets.join(req.socket, req.body.room)
    res.send(200)
  },
  leave: function(req, res) {
    sails.log.debug("User left dthis room=" + req.body.room)
    sails.sockets.leave(req.socket, req.body.room)
    res.send(200)
  },
  send: function(req, res) {
    sails.log.debug(req.body)
    sails.sockets.broadcast(req.body.room, "message", req.body.data)
    res.send(200)
  }
}
