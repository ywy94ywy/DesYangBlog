const { exec, es } = require("../db/mysql");

const getTags = async () => {
  const sql = "SELECT id, name, type FROM tag;";

  return await exec(sql);
};

const addTag = async (name, type) => {
  const checkSql = `SELECT count(*) FROM tag WHERE name = ${es()} and type = ${es(
    type
  )};`;
  const sql = `INSERT INTO tag (name, type) VALUES (${es(name)}, ${es(type)});`;

  try {
    const count = await exec(checkSql);
    const exist = count[0]["count(*)"] > 0;

    if (exist) {
      return Promise.reject("标签已存在！");
    } else {
      return await exec(sql);
    }
  } catch (err) {
    console.log(err);
    return Promise.reject("传递参数错误！");
  }
};

const updateTag = async (id, name, type) => {
  const checkSql = `SELECT count(*) FROM tag WHERE name = ${es(
    name
  )} and type = ${es(type)};`;
  const sql = `UPDATE tag SET name=${es(name)}, type=${es(
    type
  )} WHERE id = ${es(id)};`;

  try {
    const count = await exec(checkSql);
    const exist = count[0]["count(*)"] > 0;

    if (exist) {
      return Promise.reject("标签已存在！");
    } else {
      return await exec(sql);
    }
  } catch (err) {
    console.log(err);
    return Promise.reject("传递参数错误！");
  }
};

const delTag = async (id) => {
  const sql = `DELETE FROM tag WHERE id = ${es(id)};`;

  return await exec(sql);
};

module.exports = {
  getTags,
  addTag,
  updateTag,
  delTag,
};
