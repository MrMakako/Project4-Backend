const pool = require("../database");

async function registerUser(user) {
  console.log("user-registered");
  console.log(user.email, user.encryptedPassword, user.salt);
  await pool.query("Call createUser(?,?,?)", [
    user.email,
    user.encryptedPassword,
    user.salt,
  ]);
  return user;
}
//𐐘🤝ඞ TeamWork
const getCredentials = async (email) => {
  const credentials = await pool.query("Call getCredential(?)", [email]);
  credentials = JSON.stringify(credentials);
  return JSON.parse(credentials);
};

module.exports = {
  registerUser,
  getCredentials,
};
