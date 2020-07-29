const { DataTypes } = require('sequelize')
const sequelize = require('../db/mysql')

const Article = sequelize.define('article', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    validate: {
      notNull: {
        msg: 'id不能为空!',
      },
      is: ['^[a-z]+$', 'i'],
    },
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      notNull: {
        msg: '标题不能为空!',
      },
    },
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        msg: '正文不能为空!',
      },
    },
  },
  original: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    validate: {
      notNull: {
        msg: '是否原创不能为空!',
      },
    },
  },
  classify_id: DataTypes.INTEGER,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
  click: DataTypes.INTEGER,
  published: DataTypes.BOOLEAN,
})

module.exports = Article
