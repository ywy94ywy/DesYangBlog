const { exec, es } = require('../db/mysql')

const getArticleList = async () => {
  const sql = 'SELECT article_id,title,create_time,tags FROM article;'

  return await exec(sql)
}

const getArticleDetail = async (id) => {
  const sql = `SELECT article_id,title,text,create_time,tags FROM article WHERE article_id = ${es(
    id,
  )};`

  return await exec(sql)
}

const addArticle = async (title, text, tags) => {
  const sql = `INSERT INTO article (title,text,tags) VALUES (${es(title)},${es(
    text,
  )},${es(tags)});`

  return await exec(sql)
}

const updateArticle = async (id, title, text, tags) => {
  const sql = `UPDATE article SET title=${es(title)}, text=${es(
    text,
  )}, tags=${es(tags)} WHERE article_id = ${es(id)};`

  return await exec(sql)
}

const delArticle = async (id) => {
  const sql = `DELETE FROM article WHERE article_id = ${es(id)};`
  return await exec(sql)
}

module.exports = {
  getArticleList,
  getArticleDetail,
  addArticle,
  updateArticle,
  delArticle,
}
