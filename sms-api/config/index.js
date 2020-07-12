const publicRoutes = require('./routes/publicRoutes');

module.exports = {
  migrate: false,
  publicRoutes,
  port: process.env.PORT || '4000',
};
