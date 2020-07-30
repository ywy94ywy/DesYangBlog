const { DataTypes } = require('sequelize')
const sequelize = require('../db/mysql')
// const Article = require('./article')
// const Tag = require('./tag')

const Tagging = sequelize.define('tag_relation', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  article_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  tag_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
})

module.exports = Tagging
