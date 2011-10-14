/**
 * Module dependencies.
 */
var util = require('util');


/**
 * Primary middleware needed to initialize Passport for incoming requests.
 *
 * Intializes Passport for incoming requests, allowing authentication strategies
 * to be applied.  If a login session has been established, `req.user` will be
 * populated with the current user.
 *
 * Applications must set up Passport with functions to serialize a user into and
 * out of a session.  For example, a common pattern is to serialize just the
 * user ID into the session (due to the fact that it is desirable to store the
 * minimum amount of data in a session).  When a subsequent request arrives for
 * the session, the full User object can be loaded from the database by the ID.
 *
 * This middleware must be in use by the Connect/Express application for
 * Passport to operate.  Note that Passport requires a session to persist
 * login state, so we must use the `session()` middleware _before_
 * `authentication()`.
 *
 * Examples:
 *
 *     app.configure(function() {
 *       app.use(connect.cookieParser());
 *       app.use(connect.session({ secret: 'keyboard cat' }));
 *       app.use(passport.authentication());
 *     });
 *
 *     passport.serializeUser(function(user, done) {
 *       done(null, user.id);
 *     });
 *
 *     passport.deserializeUser(function(id, done) {
 *       User.findById(id, function (err, user) {
 *         done(err, user);
 *       });
 *     });
 *
 * @return {Function}
 * @api public
 */
module.exports = function authentication() {
  
  return function authentication(req, res, next) {
    var passport = this;
    
    if (req.session && req.session[passport._key]) {
      // load existing data from session
      req._passport = req.session[passport._key];
    } else if (req.session) {
      // add initial data to session
      req.session[passport._key] = {};
      req._passport = req.session[passport._key];
    } else {
      // no session is available
      req._passport = {};
    }
    
    if (req._passport.user) {
      passport.deserializeUser(req._passport.user, function(err, user) {
        if (err) { return next(err); }
        req.user = user;
        next();
      });
    } else {
      next();
    }
  }
}