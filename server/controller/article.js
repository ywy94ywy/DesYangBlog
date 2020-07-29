const { exec, es } = require('../db/mysql')

const insert = (table, { ...params }) => {
  const names = `${Object.keys(params).join()}`
  const value = `${Object.values(params)
    .map((v) => es(v))
    .join()}`

  return `INSERT INTO ${table} (${names}) VALUES (${value})`
}

const update = (table, { ...params }, { ...condition }) => {
  let data = ''
  for (let i in params) {
    if (!!data) {
      data += ', ' + i + ' = ' + es(params[i])
    } else {
      data += i + '=' + es(params[i])
    }
  }

  let sql = `UPDATE ${table} SET ${data}`

  if (condition && JSON.stringify(condition) !== '{}') {
    sql += ' WHERE '
    let d = ''

    for (let i in condition) {
      if (!!d) {
        d += ' and ' + i + ' = ' + es(condition[i])
      } else {
        d += i + ' = ' + es(condition[i])
      }
    }
    sql += d
  }
  sql += ';'

  return sql
}

const getArticleList = async () => {
  const sql =
    'SELECT id,title,create_time,update_time,original,visits,tags,published FROM article;'

  return await exec(sql)
}

const getPublishedArticles = async () => {
  const sql =
    'SELECT id,title,create_time,update_time,original,visits,tags,published FROM article where published = 1;'

  return await exec(sql)
}

const getArticleDetail = async (id) => {
  const sql = `SELECT id,title,text,create_time,update_time,original,visits,tags,published  FROM article WHERE id = ${es(
    id,
  )};`

  return await exec(sql)
}

const addArticle = async (params) => {
  const sql = insert('article', params)

  return await exec(sql)
}

const updateArticle = async ({ id, ...params }) => {
  const sql = update('article', params, { id })

  return await exec(sql)
}

const delArticle = async (id) => {
  const sql = `DELETE FROM article WHERE id = ${es(id)};`
  return await exec(sql)
}

const visitArticle = async (id) => {
  const sql = `UPDATE article SET visits = visits + 1 WHERE id = ${es(id)};`
  return await exec(sql)
}

module.exports = {
  getArticleList,
  getPublishedArticles,
  getArticleDetail,
  addArticle,
  updateArticle,
  delArticle,
  visitArticle,
}
