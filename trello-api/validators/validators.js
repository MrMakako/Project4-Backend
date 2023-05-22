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
        message: "doesn't look like a valid email",
      },
    },
  };

  console.log(validate({ from: email }, rules));
}

function isPassword() {}

module.exports = { isInteger, isEmail, isPassword };
