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
  if (code && typeof code !== 'string') {
    return res.json({
      status: 500,
      message: '参数格式不正确！',
    })
  }

  getDictionarys(code).then((data) => {
    const d = data.map((v) => {
      v.value = JSON.parse(v.value)
      return v
    })
    return res.json({
      status: 200,
      data: d,
    })
  })
})

router.post('/add', function ({ body }, res, next) {
  const { code, name, value } = body
  let isValid = false
  if (typeof code !== 'string' || typeof name !== 'string') {
    return res.json({
      status: 500,
      message: 'code或name格式不正确！',
    })
  }

  try {
    if (JSON.parse(value) instanceof Array) {
      isValid = true
    }
  } catch (err) {
    console.log(err)
  }
  if (!isValid) {
    return res.json({
      status: 500,
      message: 'value必须是数组！',
    })
  }
  addDictionary(code, name, value)
    .then(() => {
      return res.json({
        status: 200,
        data: null,
      })
    })
    .catch((err) => {
      return res.json({
        status: 500,
        message: err,
      })
    })
})

router.post('/update', function ({ body }, res, next) {
  const { id, code, name, value } = body
  if (
    !id ||
    !code ||
    !name ||
    Number.isNaN(+id) ||
    typeof code !== 'string' ||
    typeof name !== 'string'
  ) {
    res.json({
      status: 500,
      message: '参数格式不正确！',
    })
  }

  try {
    if (JSON.parse(value) instanceof Array) {
      isValid = true
    }
  } catch (err) {
    console.log(err)
  }
  if (!isValid) {
    res.json({
      status: 500,
      message: 'value必须是数组！',
    })
  }

  updateDictionary(id, code, name, value).then(() => {
    res.json({
      status: 200,
      data: null,
    })
  })
})

router.post('/del', function ({ body }, res, next) {
  const { id } = body
  if (!id || Number.isNaN(+id)) {
    res.json({
      status: 500,
      message: '参数格式不正确！',
    })
  }

  delDictionary(id).then(() => {
    res.json({
      status: 200,
      data: null,
    })
  })
})

module.exports = router
