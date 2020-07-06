var express = require("express");
var fs = require("fs");
var router = express.Router();
const {
  getArticleList,
  getArticleDetail,
  addArticle,
  delArticle,
} = require("../controller/article");
const multer = require("multer");
const upload = multer();

router.post("/getList", function (req, res, next) {
  getArticleList().then((data) => {
    return res.json({
      articles: data,
    });
  });
});

router.post("/getDetail", function (req, res, next) {
  const { article_id } = req.body;

  getArticleDetail(article_id).then((data) => {
    return res.json(data[0]);
  });
});

router.post("/add", upload.single("content"), function (req, res, next) {
  const { title } = req.body;
  const { buffer } = req.file;

  addArticle(title, buffer.toString()).then(() => {
    return res.json({});
  });
});

router.post("/del", function (req, res, next) {
  const { article_id } = req.body;

  delArticle(article_id).then(() => {
    return res.json({});
  });
});

module.exports = router;
