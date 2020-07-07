const { exec } = require('../db/mysql')

const getArticleList = () => {
  const sql = 'select article_id,title,create_time from article;'

  return exec(sql).then((res) => res)
}

const getArticleDetail = (id) => {
  const sql = `select article_id,title,text,create_time from article where article_id = ${id};`

  return exec(sql).then((res) => res)
}

const addArticle = (title, text) => {
  const sql = `insert into article (title,text) values ("${title}","${text}")`

  return exec(sql).then((res) => res)
}

const delArticle = (id) => {
  const sql = `delete from article where article_id = ${id}`
  return exec(sql).then((res) => res)
}

module.exports = {
  getArticleList,
  getArticleDetail,
  addArticle,
  delArticle,
}
