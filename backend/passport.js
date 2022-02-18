const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "289336618455-e6ei9mvait3grb4t36t0l8gn9snlol7f.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "55db431f253ef788b53f";
GITHUB_CLIENT_SECRET = "2e1483cbe77de4a2bd9a8a0497559f4bb00d308c";

FACEBOOK_APP_ID = "464046955455669";
FACEBOOK_APP_SECRET = "540e0bdbe02a5a2f692ff02f24ecc4ca";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
