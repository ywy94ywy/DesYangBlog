const mysql = require("mysql");
const { MYSQL_CONFIG } = require("../config/db");

const con = mysql.createConnection(MYSQL_CONFIG);

con.connect();

const exec = (sql) => {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, res) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(res);
    });
  });
};

module.exports = {
  exec,
  es: mysql.escape,
};
