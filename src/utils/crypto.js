const crypto = require("crypto");
const password = require("../config/auth").cryptopassword;
module.exports = {
  encrypt: (data) => {
    let mykey = crypto.createCipher("aes-128-cbc", password);
    let encrypt = mykey.update(data, "utf8", "hex");
    encrypt += mykey.final("hex");
    return encrypt;
  },
  decrypt: (data) => {
    var mykey = crypto.createDecipher("aes-128-cbc", password);
    var decrypt = mykey.update(data, "hex", "utf8");
    decrypt += mykey.final("utf8");
    return decrypt;
  },
};
