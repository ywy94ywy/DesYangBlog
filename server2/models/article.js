const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('article', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: '标题不能为空！',
        },
      },
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: '正文不能为空！',
        },
      },
    },
    original: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    classify_id: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: '分类参数不正确！',
        },
      },
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    click: { type: DataTypes.INTEGER, defaultValue: 0 },
    published: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      // validate: {
      //   isIn: {
      //     args: /^0|1$/i,
      //     msg: '发布参数格式不正确！',
      //   },
      // },
    },
  })
}
