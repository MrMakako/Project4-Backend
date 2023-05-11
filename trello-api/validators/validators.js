function isInteger(value) {
  const conv_value = parseInt(value);

  if (Number.isInteger(conv_value)) {
    return true;
  } else {
    return false;
  }
}

module.exports = { isInteger };
