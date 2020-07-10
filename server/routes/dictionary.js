var express = require('express')
var router = express.Router()
const {
  getDictionarys,
  addDictionary,
  updateDictionary,
  delDictionary,
} = require('../controller/dictionary')

router.post('/get', function ({ body }, res, next) {
  const { code } = body

  getDictionarys(code).then((data) => {
    const d = data.map((v) => {
      v.value = JSON.parse(v.value)
      return v
    })
    res.json({
      status: 200,
      data: d,
    })
  })
})

router.post('/add', function ({ body }, res, next) {
  const { code, name, value } = body

  addDictionary(code, name, value).then(() => {
    res.json({
      status: 200,
      data: null,
    })
  })
})

router.post('/update', function ({ body }, res, next) {
  const { code, name, value } = body

  updateDictionary(id, code, name, value).then(() => {
    res.json({
      status: 200,
      data: null,
    })
  })
})

router.post('/del', function ({ body }, res, next) {
  const { id } = body

  delDictionary(id).then(() => {
    res.json({
      status: 200,
      data: null,
    })
  })
})

module.exports = router
