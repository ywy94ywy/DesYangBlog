var express = require('express')
var router = express.Router()
const { getTags, addTag, updateTag, delTag } = require('../controller/tags')

router.post('/get', function (req, res, next) {
  getTags().then((data) => {
    return res.json({
      status: 200,
      data,
    })
  })
})

router.post('/add', function (req, res, next) {
  const { name, type } = req.body
  if (!name || !type || typeof name !== 'string' || typeof type !== 'string') {
    return res.json({
      status: 500,
      message: '参数格式不正确！',
    })
  }

  addTag(name, type)
    .then(() => {
      return res.json({ status: 200, data: null })
    })
    .catch((message) => {
      return res.json({
        status: 500,
        message,
      })
    })
})

router.post('/update', function (req, res, next) {
  const { id, name, type } = req.body
  if (
    !id ||
    !name ||
    !type ||
    Number.isNaN(+id) ||
    typeof name !== 'string' ||
    typeof type !== 'string'
  ) {
    return res.json({
      status: 500,
      message: '参数格式不正确！',
    })
  }

  updateTag(id, name, type)
    .then(() => {
      return res.json({ status: 200, data: null })
    })
    .catch((message) => {
      return res.json({
        status: 500,
        message,
      })
    })
})

router.post('/del', function (req, res, next) {
  const { id } = req.body
  if (!id || Number.isNaN(+id)) {
    return res.json({
      status: 500,
      message: '参数格式不正确！',
    })
  }

  delTag(id).then(() => {
    return res.json({ status: 200, data: null })
  })
})

module.exports = router
