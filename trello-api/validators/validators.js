var validate = require("validate.js");

function isInteger(value) {
  const conv_value = parseInt(value);

  if (Number.isInteger(conv_value)) {
    return true;
  } else {
    return false;
  }
}

function isEmail(email) {
  const rules = {
    from: {
      email: {
        message: "error",
      },
    },
  };
  console.log(validate({ from: email }, rules));
  return typeof validate({ from: email }, rules) === "undefined";
}

function isPassword(password) {
  var constraints = {
    password_f: {
      presence: true,
      format: {
        pattern: "[a-z0-9]+",
        flags: "i",
        message: "error",
      },

      length: {
        minimum: 6,
        message: "error",
      },
    },
  };
  console.log(validate({ password_f: password }, constraints));
  return typeof validate({ password_f: password }, constraints) === "undefined";
}

module.exports = { isInteger, isEmail, isPassword };
