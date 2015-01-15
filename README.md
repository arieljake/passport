# Passport

[![Build](https://travis-ci.org/arieljake/passport.png)](https://travis-ci.org/arieljake/passport)
[![Coverage](https://coveralls.io/repos/arieljake/passport/badge.png)](https://coveralls.io/r/arieljake/passport)
[![Quality](https://codeclimate.com/github/arieljake/passport.png)](https://codeclimate.com/github/arieljake/passport)
[![Dependencies](https://david-dm.org/arieljake/passport.png)](https://david-dm.org/arieljake/passport)

Passport is [Express](http://expressjs.com/)-compatible authentication
middleware for [Node.js](http://nodejs.org/).

This fork of Passport adds a register function to the authenticator that works exactly like the 
authenticate function to allow strategies to define how new users will be registered.

See arieljake/passport-local for an implementation of LocalStrategy that implements a register
function.

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)
  - [Ariel Jakobovits](http://github.com/arieljake)

## License

[The MIT License](http://opensource.org/licenses/MIT)