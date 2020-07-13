const { exec, es } = require("../db/mysql");

const insert = (table, { ...params }) => {
  const names = `${Object.keys(params).join()}`;
  const value = `${Object.values(params)
    .map((v) => es(v))
    .join()}`;

  return `INSERT INTO ${table} (${names}) VALUES (${value})`;
};

const update = (table, { ...params }, { ...condition }) => {
  const data = "";
  for (let i in params) {
    if (!!data) {
      data += ", " + i + " = " + es(params[i]);
    } else {
      data += i + "=" + es(params[i]);
    }
  }

  let sql = `UPDATE ${table} SET ${fixedData}`;

  if (condition) {
    const d = "";
    for (let i in params) {
      if (!!d) {
        d += " and " + i + " = " + es(params[i]);
      } else {
        d += i + " = " + es(params[i]);
      }
    }
    sql += " WHERE ";
  }
  sql += ";";
  return sql;
};

const getArticleList = async () => {
  const sql = "SELECT article_id,title,create_time,tags FROM article;";

  return await exec(sql);
};

const getArticleDetail = async (id) => {
  const sql = `SELECT article_id,title,text,create_time,tags FROM article WHERE article_id = ${es(
    id
  )};`;

  return await exec(sql);
};

const addArticle = async (params) => {
  const sql = insert("article", params);

  return await exec(sql);
};

const updateArticle = async ({ id, ...params }) => {
  const sql = update("article", params, { id });
  // const sql = `UPDATE article SET title=${es(title)}, text=${es(
  //   text
  // )}, tags=${es(tags)} WHERE article_id = ${es(id)};`;

  return await exec(sql);
};

const delArticle = async (id) => {
  const sql = `DELETE FROM article WHERE article_id = ${es(id)};`;
  return await exec(sql);
};

module.exports = {
  getArticleList,
  getArticleDetail,
  addArticle,
  updateArticle,
  delArticle,
};
