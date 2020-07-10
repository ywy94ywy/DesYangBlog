var express = require('express')
var router = express.Router()
const {
  getTags,
  //   getArticleDetail,
  addTag,
  //   updateArticle,
  delTag,
} = require('../controller/tags')

router.post('/get', function (req, res, next) {
  getTags().then((data) => {
    res.json({
      status: 200,
      data,
    })
  })
})

router.post('/add', function (req, res, next) {
  const { name, type } = req.body

  addTag(name, type)
    .then(() => {
      res.json({ status: 200, data: null })
    })
    .catch((message) => {
      res.json({
        status: 500,
        message,
      })
    })
})

router.post('/del', function (req, res, next) {
  const { id } = req.body

  delTag(id).then(() => {
    res.json({ status: 200, data: null })
  })
})

module.exports = router
