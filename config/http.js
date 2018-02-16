/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * Only applies to HTTP requests (not WebSockets)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.http.html
 */

module.exports.http = {
  /****************************************************************************
   *                                                                           *
   * Express middleware to use for every Sails request. To add custom          *
   * middleware to the mix, add a function to the middleware config object and *
   * add its key to the "order" array. The $custom key is reserved for         *
   * backwards-compatibility with Sails v0.9.x apps that use the               *
   * `customMiddleware` config option.                                         *
   *                                                                           *
   ****************************************************************************/

  middleware: {
    /***************************************************************************
     *                                                                          *
     * The order in which middleware should be run for HTTP request. (the Sails *
     * router is invoked by the "router" middleware below.)                     *
     *                                                                          *
     ***************************************************************************/
    fixRoutes: function(req, res, next) {
      // sails.log.debug("1111111Requested :: ", req.method, req.url)
      // sails.log.debug("2Requested :: ", req.url.split("/")[2])
      // let p1 = req.url.split("/")[2]
      // let p2 = p1.split("/")[1]
      // sails.log.debug("333355Requested :: ", p2)
      if (req.url.split("/")[2] === "build") {
        sails.log.debug("fffff :: ", req.url)
        let r = req.url.substr(req.url.indexOf("/build"))
        sails.log.debug("uuuu :: ", r)
        req.url = r
      }
      return next()
    },
    order: [
      "startRequestTimer",
      "cookieParser",
      "session",
      "myRequestLogger",
      "bodyParser",
      "handleBodyParserError",
      "compress",
      "methodOverride",
      "poweredBy",
      "$custom",
      "fixRoutes",
      "router",
      "www",
      "favicon",
      "404",
      "500"
    ]
    /****************************************************************************
     *                                                                           *
     * Example custom middleware; logs each request to the console.              *
     *                                                                           *
     ****************************************************************************/
    // myRequestLogger: function (req, res, next) {
    //     console.log("Requested :: ", req.method, req.url);
    //     return next();
    // }
    /***************************************************************************
     *                                                                          *
     * The body parser that will handle incoming multipart HTTP requests. By    *
     * default,Sails uses [skipper](http://github.com/balderdashy/skipper). See *
     * https://github.com/expressjs/body-parser for other options. Note that    *
     * Sails uses an internal instance of Skipper by default; to override it    *
     * and specify more options, make sure to "npm install                      *
     * skipper@for-sails-0.12 --save" in your app first. You can also specify a *
     * different body parser or a custom function with req, res and next        *
     * parameters (just like any other middleware function).                    *
     *                                                                          *
     ***************************************************************************/
    // bodyParser: require('skipper')({strict: true})
  }

  /***************************************************************************
   *                                                                          *
   * The number of milliseconds to cache static assets in production.         *
   * These are any flat files like images, scripts, styleshseets, etc.        *
   * that are served by the static middleware.  By default, these files       *
   * are served from `.tmp/public`, a hidden folder compiled by Grunt.        *
   *                                                                          *
   ***************************************************************************/

  // cache: 31557600000
}
