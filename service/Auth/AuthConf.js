const config = require("../../config/auth");
class AuthConf {
  constructor(type) {
    this.type = type;
  }

  getConfig() {
    return config[this.type];
  }
}

module.exports = AuthConf;
