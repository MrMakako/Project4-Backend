const pool = require("../database");

let logged_user = [];
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
  //credentials = JSON.stringify(credentials);
  //return JSON.parse(credentials);
  return credentials;
};

module.exports = {
  registerUser,
  getCredentials,
  logged_user,
};
