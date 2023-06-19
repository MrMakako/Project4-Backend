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
  const credentials = await pool.query(
    "SELECT u.salt, u.password,u.id FROM users u  WHERE u.email=?;",
    [email]
  );
  return credentials;
};

module.exports = {
  registerUser,
  getCredentials,
  logged_user,
};
