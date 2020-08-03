const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('article_tag', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  })
}
