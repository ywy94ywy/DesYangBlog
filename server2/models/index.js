const sequelize = require('../db/mysql')

const modelDefiners = [
  require('./article'),
  require('./tag'),
  require('./articleTag'),
]

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize)
}

// 关系
sequelize.models.article.belongsToMany(sequelize.models.tag, {
  through: sequelize.models.article_tag,
})
sequelize.models.tag.belongsToMany(sequelize.models.article, {
  through: sequelize.models.article_tag,
})

sequelize.sync()

module.exports = sequelize
