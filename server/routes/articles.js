var express = require("express");
var router = express.Router();
const {
  getArticleList,
  getArticleDetail,
  addArticle,
  updateArticle,
  delArticle,
} = require("../controller/article");

router.post("/getList", function (req, res, next) {
  getArticleList().then((data) => {
    setTimeout(() => {
      return res.json({
        status: 200,
        data: data.map((v) => ({ ...v, tags: JSON.parse(v.tags) })),
      });
    }, 1000);
  });
});

router.post("/getDetail", function (req, res, next) {
  const { id } = req.body;

  getArticleDetail(id).then((data) => {
    const d = data[0];
    return res.json({
      status: 200,
      data: { ...d, tags: JSON.parse(d.tags) },
    });
  });
});

router.post("/add", function (req, res, next) {
  const { title, text, tags, original } = req.body;
  const sqlParams = {};
  if (
    !title ||
    !text ||
    typeof title !== "string" ||
    typeof text !== "string"
  ) {
    res.json({
      status: 500,
      message: "参数格式不正确！",
    });
  }
  sqlParams.title = title;
  sqlParams.text = text;
  if (Number.isInteger(original)) {
    if ([0, 1].includes(original)) {
      sqlParams.original = original;
    } else {
      res.json({
        status: 500,
        message: "original格式不正确！",
      });
    }
  }
  if (!!tags) {
    if (tags instanceof Array) {
      sqlParams.tags = JSON.stringify(tags);
    } else {
      res.json({
        status: 500,
        message: "tags必须是数组！",
      });
    }
  }

  addArticle(sqlParams).then(() => {
    res.json({
      status: 200,
      data: null,
    });
  });
});

router.post("/update", function (req, res, next) {
  const { id, title, text, tags } = req.body;
  const sqlParams = {};
  if (
    !id ||
    !title ||
    !text ||
    typeof id !== "string" ||
    typeof title !== "string" ||
    typeof text !== "string"
  ) {
    res.json({
      status: 500,
      message: "参数格式不正确！",
    });
  }
  sqlParams.id = id;
  sqlParams.title = title;
  sqlParams.text = text;
  if (Number.isInteger(original)) {
    if ([0, 1].includes(original)) {
      sqlParams.original = original;
    } else {
      res.json({
        status: 500,
        message: "original格式不正确！",
      });
    }
  }
  if (!!tags) {
    if (tags instanceof Array) {
      sqlParams.tags = JSON.stringify(tags);
    } else {
      res.json({
        status: 500,
        message: "tags必须是数组！",
      });
    }
  }

  updateArticle(sqlParams).then(() => {
    res.json({
      status: 200,
      data: null,
    });
  });
});

router.post("/del", function (req, res, next) {
  const { id } = req.body;

  delArticle(id).then(() => {
    res.json({
      status: 200,
      data: null,
    });
  });
});

module.exports = router;
