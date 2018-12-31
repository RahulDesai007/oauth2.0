const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        console.log('passport callback function fired:');
        console.log(profile);
    })
);

    passport.use(
    new LinkedInStrategy({
        // options for google strategy
        clientID: keys.linkedin.clientID,
        clientSecret: keys.linkedin.clientSecret,
        scope: ['r_emailaddress', 'r_basicprofile'],
        callbackURL: '/auth/linkedin/redirect',
    }, ( accessToken,refreshToken, r_basicprofile, done) => {
        // passport callback function
        console.log('passport callback function fired:');
        console.log(r_basicprofile);
        //console.log(r_emailaddress)
    })
);


passport.use(
    new FacebookStrategy({
        // options for google strategy
        clientID: keys.facebook.clientID,
        clientSecret: keys.facebook.clientSecret,
        scope: ['profile'],
        callbackURL: '/auth/facebook/redirect',
    }, ( accessToken,refreshToken, profile, done) => {
        // passport callback function
        console.log('passport callback function fired:');
        console.log(profile);
        //console.log(r_emailaddress)
    })
);