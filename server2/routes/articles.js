const express = require('express')
const router = express.Router()
const Article = require('../models/article')
const { SuccessModel, ErrorModel } = require('../models/response')

router.get('/getList', async (req, res, next) => {
  try {
    const articles = await Article.findAll()
    res.json(new SuccessModel(articles))
  } catch (err) {
    res.json(new ErrorModel(500, err))
  }
})

router.get('/getDetail', async (req, res, next) => {
  try {
    const article = await Article.findByPk(req.body.id)
    res.json(new SuccessModel(article))
  } catch (err) {
    res.json(new ErrorModel(500, err))
  }
})

router.post('/add', async (req, res, next) => {
  try {
    await Article.create(req.body)
    res.json(new SuccessModel())
  } catch (err) {
    res.json(new ErrorModel(500, err))
  }
})

router.post('/update', async (req, res, next) => {
  const { id, ...rest } = req.body
  try {
    await Article.update(rest, { where: { id } })
    res.json(new SuccessModel())
  } catch (err) {
    res.json(new ErrorModel(500, err))
  }
})

router.post('/delete', async (req, res, next) => {
  const { id } = req.body
  try {
    await Article.destroy({ where: {id} })
    res.json(new SuccessModel())
  } catch (err) {
    res.json(new ErrorModel(500, err))
  }
})

module.exports = router
