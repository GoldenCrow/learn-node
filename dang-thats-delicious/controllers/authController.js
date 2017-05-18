const passport = require('passport');

exports.login = passport.authenticate('local', {
  failureRedirect: '/',
  failureFlash: 'Failed Login!',
  successRedirect: '/',
  successFlash: 'You are now logged in!'
});
