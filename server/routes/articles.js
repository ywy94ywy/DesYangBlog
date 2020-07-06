var express = require('express')
var fs = require('fs')
var router = express.Router()
const {
  getArticleList,
  // getArticleDetail,
  addArticle,
  // delArticle,
} = require('../controller/article')
const multer = require('multer')
const upload = multer()

// router.get('/', function (req, res, next) {
// if (req.query.id === '1') {
//   fs.readFile('C:\\Users\\Admin\\Desktop\\test.md', function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     res.send({
//       article: data.toString(),
//     })
//   })
// }
// if (req.query.id === '2') {
// fs.readFile('C:\\Users\\Admin\\Desktop\\test2.md', function (err, data) {
//   if (err) {
//     return console.error(err)
//   }
//   res.send({
//     article: data.toString(),
//   })
// })
// }
// })

router.post('/get', function (req, res, next) {
  getArticleList().then((data) => {
    return res.json({
      articles: data,
    })
  })
})

router.post('/add', upload.single('content'), function (req, res, next) {
  const { title } = req.body
  const { buffer } = req.file

  addArticle(title, buffer.toString()).then(() => {
    return res.json({})
  })
})

module.exports = router
