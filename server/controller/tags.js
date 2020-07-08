const { exec, es } = require('../db/mysql')

const getTags = async () => {
  const sql = 'SELECT tag_id, name FROM tag;'

  return await exec(sql)
}

const addTag = async (name) => {
  const checkSql = `SELECT count(*) FROM tag WHERE name = ${es(name)};`
  const sql = `INSERT INTO tag (name) VALUES (${es(name)});`

  const count = await exec(checkSql)
  const exist = count[0]['count(*)'] > 0

  if (exist) {
    return Promise.reject('标签已存在')
  } else {
    return await exec(sql)
  }
}

// const updateArticle = (id, title, text) => {
//   console.log(`UPDATE article SET title=${es(title)}, `)
//   const sql = `UPDATE article SET title=${es(title)}, text=${es(
//     text,
//   )} WHERE article_id = ${es(id)};`

//   return exec(sql).then((res) => res)
// }

const delTag = async (id) => {
  const sql = `DELETE FROM tag WHERE tag_id = ${es(id)};`

  return await exec(sql)
}

module.exports = {
  getTags,
  // getArticleDetail,
  addTag,
  // updateArticle,
  delTag,
}
