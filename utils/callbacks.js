const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../service/Users/users");

module.exports = {
  facebook: (config) => {
    return new FacebookStrategy(
      config,
      async (token, refreshToken, profile, done) => {
        let user;
        try {
          let userObj = {
            id: profile.id,
            token,
            email: (profile.emails[0].value || "").toLowerCase(),
            name: `${profile.name.givenName} ${profile.name.familyName}`,
            provider: "facebook",
          };
          user = await new User().createUser(userObj);
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    );
  },
};
