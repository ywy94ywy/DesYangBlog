const { Op } = require('sequelize')
const express = require('express')
const router = express.Router()
const { models } = require('../models')
const { SuccessModel, ErrorModel } = require('../models/response')
const { isId } = require('../utils')

router.get('/getTags', async (req, res, next) => {
  const { article_id } = req.query

  try {
    const articleId = isId(article_id)
    const article = await models.article.findByPk(articleId)
    if (!article) {
      return res.json(new ErrorModel(500, '文章不存在！'))
    }

    const tag_list = await article.getTags()
    res.json(new SuccessModel(tag_list))
  } catch (err) {
    res.json(new ErrorModel(500, err))
  }
})

router.get('/getArticles', async (req, res, next) => {
  const { tag_id } = req.query

  try {
    const tagId = isId(tag_id)
    const tag = await models.tag.findByPk(tagId)
    if (!tag) {
      return res.json(new ErrorModel(500, '标签不存在！'))
    }

    const article_list = await tag.getArticles()
    res.json(new SuccessModel(article_list))
  } catch (err) {
    res.json(new ErrorModel(500, err))
  }
})

router.post('/add', async (req, res, next) => {
  const { article_id, tag_id_list } = req.body
  const articleId = isId(article_id)
  const tagIdList = tag_id_list.map((v) => isId(v))

  try {
    const article = await models.article.findByPk(articleId)
    if (!article) {
      return res.json(new ErrorModel(500, '文章不存在！'))
    }
    const tagList = await models.tag.findAll({
      where: {
        id: {
          [Op.in]: tagIdList,
        },
      },
    })

    if (tagList.length === 0) {
      return res.json(new ErrorModel(500, '标签不存在！'))
    }
    const article_tag = await article.addTags(tagList)

    if (article_tag === 0) {
      return res.json(new ErrorModel(500, '添加失败！'))
    }

    res.json(new SuccessModel(article_tag))
  } catch (err) {
    res.json(new ErrorModel(500, err))
  }
})

router.post('/update', async (req, res, next) => {
  const { article_id, tag_id_list } = req.body
  const articleId = isId(article_id)
  const tagIdList = tag_id_list.map((v) => isId(v))

  try {
    const article = await models.article.findByPk(articleId)
    if (!article) {
      res.json(new ErrorModel(500, '文章不存在！'))
    }
    const tagList = await models.tag.findAll({
      where: {
        id: {
          [Op.in]: tagIdList,
        },
      },
    })

    const article_tag = await article.setTags(tagList)

    if (article_tag === 0) {
      return res.json(new ErrorModel(500, '更新失败！'))
    }

    res.json(new SuccessModel())
  } catch (err) {
    res.json(new ErrorModel(500, err))
  }
})

module.exports = router
