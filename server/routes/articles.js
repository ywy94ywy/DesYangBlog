var express = require('express')
var fs = require('fs')
var router = express.Router()
const {
  getArticleList,
  getArticleDetail,
  addArticle,
  delArticle,
} = require('../controller/article')
const multer = require('multer')
const upload = multer()

router.post('/getList', function (req, res, next) {
  getArticleList().then((data) => {
    setTimeout(() => {
      return res.json({
        articles: data,
      })
    }, 1000)
  })
})

router.post('/getDetail', function (req, res, next) {
  const { id } = req.body

  getArticleDetail(id).then((data) => {
    return res.json(data[0])
  })
})

router.post('/add', upload.single('content'), function (req, res, next) {
  const { title, text } = req.body

  addArticle(title, text).then(() => {
    return res.json({})
  })
})

router.post('/del', function (req, res, next) {
  const { id } = req.body

  delArticle(id).then(() => {
    return res.json({})
  })
})

module.exports = router
