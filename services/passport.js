const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');


// identify user using user.id from mongo identifier not profile id
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// deserializUser takes above id and turn it into a User Model instance
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

// creates a new instance of google strategy- console.developers.google.com
passport.use
    (new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id })
                
            if (existingUser) {
                // we already have a record with the given profile id
                return done(null, existingUser);
            }
           
            // we dont have a user record wit this id, make a new record
            const user = await new User({ googleId: profile.id }).save()
            done(null, user);
            
             
        }
    )
);


