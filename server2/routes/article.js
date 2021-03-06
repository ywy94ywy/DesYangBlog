const express = require('express')
const router = express.Router()
const { models } = require('../models')
const { SuccessModel, ErrorModel } = require('../models/response')
const { isId } = require('../utils')

router.get('/getAll', async (req, res, next) => {
  try {
    const articles = await models.article.findAll()
    res.json(new SuccessModel(articles))
  } catch (err) {
    res.json(new ErrorModel(500, err))
  }
})

router.get('/getPublished', async (req, res, next) => {
  const { published } = req.query

  if (!['0', '1'].includes(published)) {
    res.json(new ErrorModel(500, '发布参数格式不正确！'))
  }

  try {
    const articles = await models.article.findAll({
      where: {
        published,
      },
    })
    res.json(new SuccessModel(articles))
  } catch (err) {
    res.json(new ErrorModel(500, err))
  }
})

router.get('/getDetail', async (req, res, next) => {
  try {
    const id = isId(req.query.id)
    const code = await models.article.update(
      { click: Sequelize.literal('click+1') },
      { where: { id } },
    )
    if (!+code) {
      return res.json(new ErrorModel(500, 'id不存在!'))
    }

    const article = await models.article.findByPk(id)
    res.json(new SuccessModel(article))
  } catch (err) {
    res.json(new ErrorModel(500, err))
  }
})

router.post('/add', async (req, res, next) => {
  try {
    await models.article.create(req.body)
    res.json(new SuccessModel())
  } catch (err) {
    res.json(new ErrorModel(500, err))
  }
})

router.post('/update', async (req, res, next) => {
  const { id: nnId, ...rest } = req.body

  try {
    const id = isId(nnId)
    const code = await models.article.update(rest, { where: { id } })

    if (+code === 1) {
      res.json(new SuccessModel())
    } else {
      res.json(new ErrorModel(500, 'id不存在，更新失败！'))
    }
  } catch (err) {
    res.json(new ErrorModel(500, err))
  }
})

router.post('/delete', async (req, res, next) => {
  try {
    const id = isId(req.body.id)
    const code = await models.article.destroy({ where: { id } })
    if (code === 1) {
      return res.json(new SuccessModel())
    } else {
      return res.json(new ErrorModel(500, 'id不存在，更新失败！'))
    }
  } catch (err) {
    return res.json(new ErrorModel(500, err))
  }
})

module.exports = router
