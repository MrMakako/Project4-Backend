const mysql2 = require("mysql2");
const dot = require("dotenv").config();

const pool = mysql2
  .createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
    connectionLimit: 10, // 连接池数
    queueLimit: 4, // 排队限制 𐐘💥╾━╤デ╦︻ඞා
  })
  .promise();
module.exports = pool;
//createConnection , tenemos que  abrir y cerrar conecciones.
//pool permite multiple conneccion  sin necesidad de abrir cerrar ya que lo manejara por nosotros.
//en el pool en vez de cerrar la conexion se espera a que otro susuario se conecte a ella mejorando el rendimiento.
