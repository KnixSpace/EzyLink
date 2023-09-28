const { User } = require("../models/user");
require("dotenv").config();
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      callbackURL: "/auth/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      let user = await User.findOne({ googleId: profile.id });
      if (user) {
        cb(null, user);
      } else {
        user = await User.create({
          googleId: profile.id,
          email: profile.email,
          name: profile.displayName,
          profilePic: profile.photos[0].value,
        });
        cb(null, user);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    cb(err, user);
  });
});
