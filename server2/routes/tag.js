const express = require('express')
const router = express.Router()
const Tag = require('../models/tag')
const Tagging = require('../models/tagging')
const { SuccessModel, ErrorModel } = require('../models/response')
const { isId } = require('../utils')

router.get('/getAll', async (req, res, next) => {
  try {
    const articles = await Tag.findAll()
    res.json(new SuccessModel(articles))
  } catch (err) {
    res.json(new ErrorModel(500, err))
  }
})

router.post('/add', async (req, res, next) => {
  try {
    await Tag.create(req.body)
    res.json(new SuccessModel())
  } catch (err) {
    res.json(new ErrorModel(500, err))
  }
})

router.post('/addToArticle', async (req, res, next) => {
  try {
    await Tagging.create(req.body)
    res.json(new SuccessModel())
  } catch (err) {
    res.json(new ErrorModel(500, err))
  }
})

// router.post('/addtoArticle', async (req, res, next) => {
//   try {
//     await Tag.create(req.body)
//     res.json(new SuccessModel())
//   } catch (err) {
//     res.json(new ErrorModel(500, err))
//   }
// })

router.post('/update', async (req, res, next) => {
  const { id: nnId, name } = req.body

  try {
    const id = isId(nnId)

    const code = await Tag.update({ name }, { where: { id } })
    if (code === 1) {
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
    const code = await Tag.destroy({ where: { id } })
    if (code === 1) {
      res.json(new SuccessModel())
    } else {
      res.json(new ErrorModel(500, 'id不存在，删除失败！'))
    }
    res.json(new SuccessModel())
  } catch (err) {
    res.json(new ErrorModel(500, err))
  }
})

module.exports = router
