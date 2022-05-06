const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log(`Access token - ${accessToken}`);
    console.log(`Refresh token - ${refreshToken}`);
    console.log(`Profile - ${JSON.stringify(profile, null, 2)}`);
    console.log(`Done value - ${done}`);
}));