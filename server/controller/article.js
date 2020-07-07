const { exec, es } = require("../db/mysql");

const getArticleList = () => {
  const sql = "SELECT article_id,title,create_time FROM article;";

  return exec(sql).then((res) => res);
};

const getArticleDetail = (id) => {
  const sql = `SELECT article_id,title,text,create_time FROM article WHERE article_id = ${es(
    id
  )};`;

  return exec(sql).then((res) => res);
};

const addArticle = (title, text) => {
  const sql = `INSERT INTO article (title,text) VALUES (${es(title)},${es(
    text
  )});`;

  return exec(sql).then((res) => res);
};

const updateArticle = (id, title, text) => {
  console.log(`UPDATE article SET title=${es(title)}, `);
  const sql = `UPDATE article SET title=${es(title)}, text=${es(
    text
  )} WHERE article_id = ${es(id)};`;

  return exec(sql).then((res) => res);
};

const delArticle = (id) => {
  const sql = `DELETE FROM article WHERE article_id = ${es(id)};`;
  return exec(sql).then((res) => res);
};

module.exports = {
  getArticleList,
  getArticleDetail,
  addArticle,
  updateArticle,
  delArticle,
};
