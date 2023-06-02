const pool = require("../database");

async function registerUser(user) {
  console.log("user-registered");
  console.log(user.email, user.encryptedPassword, user.salt);
  await pool.query("Call createUser(?,?,?)", [
    user.email,
    user.password,
    user.salt,
  ]);
  return user;
}
//𐐘🤝ඞ TeamWork
const getCredentials = async (email) => {
  const credentials = await pool.query("Call getCredentials(?)", [email]);
  return credentials;
};

module.exports = {
  registerUser,
  getCredentials,
};
