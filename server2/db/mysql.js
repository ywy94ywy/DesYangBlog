const { Sequelize } = require('sequelize')
const { MYSQL_CONFIG } = require('../config/config')

const sequelize = new Sequelize({
  database: MYSQL_CONFIG.database,
  username: MYSQL_CONFIG.username,
  password: MYSQL_CONFIG.password,
  host: MYSQL_CONFIG.host,
  dialect: 'mysql',
  define: {
    freezeTableName: true,
    underscored: true,
  },
})

module.exports = sequelize
