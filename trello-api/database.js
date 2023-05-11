const mysql2 = require("mysql2");

const pool = mysql2
  .createPool({
    host: "localhost",
    user: "root",
    password: "200400672",
    database: "trellodb",
    port: "3306",

    connectionLimit: 10, // 连接池数
    queueLimit: 4, // 排队限制
  })
  .promise();

module.exports = pool;
//createConnection , tenemos que  abrir y cerrar conecciones.
//pool permite multiple conneccion  sin necesidad de abrir cerrar ya que lo manejara por nosotros.
//en el pool en vez de cerrar la conexion se espera a que otro susuario se conecte a ella mejorando el rendimiento.
