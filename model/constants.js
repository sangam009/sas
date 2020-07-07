module.exports = {
  Auth: {
    type: {
      FACEBOOK: {
        name: "facebook",
        scope: { scope: ["email"] },
        fallbackscope: {
          session: false,
          failureRedirect: "/fail",
        },
      },
      TWITTER: { name: "twitter", scope: {} },
      LINKEDIN: { name: "linkedin", scope: {} },
      SELF: { name: "self", scope: {} },
    },
  },
};
