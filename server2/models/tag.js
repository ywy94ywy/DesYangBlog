const { DataTypes } = require('sequelize')
const sequelize = require('../db/mysql')

const Tag = sequelize.define('tag', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      notNull: {
        msg: '标签名称不能为空！',
      },
    },
  },
})

module.exports = Tag
