const { exec, es } = require("../db/mysql");

const getDictionarys = async (code) => {
  let condition = "";
  code && (condition = `WHERE code = ${es(code)}`);
  const sql = `SELECT id, code, name, value FROM dictionary ${condition};`;

  return await exec(sql);
};

const addDictionary = async (code, name, value) => {
  const checkSql = `SELECT count(*) FROM dictionary WHERE code = ${es(
    code
  )} and name = ${es(name)};`;
  const sql = `INSERT INTO dictionary (code, name, value) VALUES (${es(
    code
  )},${es(name)},${es(value)});`;

  const count = await exec(checkSql);
  const exist = count[0]["count(*)"] > 0;

  if (exist) {
    return Promise.reject("字典已存在!");
  } else {
    return await exec(sql);
  }
};

const updateDictionary = async (id, code, name, value) => {
  const checkSql = `SELECT count(*) FROM dictionary WHERE code = ${es(
    code
  )} and name = ${es(name)};`;
  const sql = `UPDATE dictionary SET code=${es(code)}, name=${es(
    name
  )}, value=${es(value)} WHERE id = ${es(id)};`;

  const count = await exec(checkSql);
  const exist = count[0]["count(*)"] > 0;

  if (exist) {
    return Promise.reject("字典已存在!");
  } else {
    return await exec(sql);
  }
};

const delDictionary = async (id) => {
  const sql = `DELETE FROM dictionary WHERE id = ${es(id)};`;
  return await exec(sql);
};

module.exports = {
  getDictionarys,
  addDictionary,
  updateDictionary,
  delDictionary,
};
