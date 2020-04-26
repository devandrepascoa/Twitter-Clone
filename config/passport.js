var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require("../models/user");
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var keys = require("./keys");
const jwt = require("jsonwebtoken");

module.exports = function (passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = keys.JWT.secretKey;
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.getUserById(jwt_payload.data._id, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
    }))

    passport.use(new GoogleStrategy({
        callbackURL: "/api/auth/google/redirect",
        clientSecret: keys.google.clientSecret,
        clientID: keys.google.clientID
    }, (accessToken, refreshToken, profile, done) => {
        var userID = profile.id;
        User.findOne({ googleID: { $in: userID } }, (err, user) => {
            if (!err) {
                if (user) {
                    //User already exists 
                    const token = jwt.sign({ data: user }, keys.JWT.secretKey, {
                        expiresIn: 604800 // 1 WEEK
                    });
                    var content = {
                        token: "JWT " + token,
                        associate: false
                    }
                    done(null, { exists: true, content: JSON.stringify(content  ) });
                } else {
                    User.getUserByEmail(profile.emails[0].value, (err, user) => {
                        if (!err) {
                            if (user) {
                                var content = {
                                    google_ID: profile.id,
                                    email: profile.emails[0].value,
                                    associate: true
                                }
                                done(null, { exists: false, associateAccount: true, content: JSON.stringify(content) });
                            } else {
                                var content = {
                                    google_ID: profile.id,
                                    name: profile.displayName,
                                    email: profile.emails[0].value,
                                    photos: profile.photos[0].value
                                }
                                done(null, { exists: false, associateAccount: false, content: JSON.stringify(content) });
                            }
                        } else {
                            done("Error searching for email", null);
                        }
                    })
                }
            } else {
                done("Error searching for the googleID", null);
            }
        })
    }))
}   
