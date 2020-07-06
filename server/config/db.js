let MYSQL_CONFIG = {};
let REDIS_CONFIG = {};

MYSQL_CONFIG = {
  host: "localhost",
  user: "root",
  password: "123456",
  port: "3306",
  database: "blog",
};

REDIS_CONFIG = {};

module.exports = {
  MYSQL_CONFIG,
  REDIS_CONFIG,
};
