const msqx = require("@mysql/xdevapi");
//createConnection , tenemos que  abrir y cerrar conecciones.
//pool permite multiple conneccion  sin necesidad de abrir cerrar ya que lo manejara por nosotros.
//en el pool en vez de cerrar la conexion se espera a que otro susuario se conecte a ella mejorando el rendimiento.

const mysqlx = require("@mysql/xdevapi");

const client = mysqlx.getClient(
  "mysqlx://root:200400672@localhost:33060/trellodb",
  {
    pooling: { maxSize: 10 },
  }
);

client.getSession().then((session) => {
  console.log(session.inspect());

  const query = session
    .sql("SELECT  * FROM USERS")
    .execute()
    .then((result) => {});

  return session.close(); // the connection becomes idle in the client pool
});
module.exports = client;
