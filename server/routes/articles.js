var express = require('express')
var router = express.Router()
const {
  getArticleList,
  getArticleDetail,
  addArticle,
  updateArticle,

  delArticle,
} = require('../controller/article')

router.post('/getList', function (req, res, next) {
  getArticleList().then((data) => {
    setTimeout(() => {
      return res.json({
        status: 200,
        data: data.map((v) => ({ ...v, tags: JSON.parse(v.tags) })),
      })
    }, 1000)
  })
})

router.post('/getDetail', function (req, res, next) {
  const { id } = req.body

  getArticleDetail(id).then((data) => {
    const d = data[0]
    return res.json({
      status: 200,
      data: { ...d, tags: JSON.parse(d.tags) },
    })
  })
})

router.post('/add', function (req, res, next) {
  const { title, text, tags } = req.body
  const tagsString = JSON.stringify(tags)

  addArticle(title, text, tagsString).then(() => {
    res.json({
      status: 200,
      data: null,
    })
  })
})

router.post('/update', function (req, res, next) {
  const { id, title, text, tags } = req.body
  const tagsString = JSON.stringify(tags)

  updateArticle(id, title, text, tagsString).then(() => {
    res.json({
      status: 200,
      data: null,
    })
  })
})

router.post('/del', function (req, res, next) {
  const { id } = req.body

  delArticle(id).then(() => {
    res.json({
      status: 200,
      data: null,
    })
  })
})

module.exports = router
