/**
 * @page 添加文章
 * @todo 图片上传
 */
import React, { useEffect, useState, useReducer } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Card, message, Form, Row, Col } from 'antd'
import { useRequest, useQuery } from 'utils'
import { addArticle, getArticleDetail, updateArticle } from './services'
import Editing from './Editing'
import Text from './Text'
import Title from './Title'

export default () => {
  const query = useQuery()
  const [editForm] = Form.useForm()
  const [title, setTitle] = useState()
  const [text, setText] = useState()

  const id = query.get('id')

  const getArticleDetailRequest = useRequest(getArticleDetail, {
    onSuccess({ title, text, tags }) {
      editForm.setFieldsValue({ title, text, tags })
      setTitle(title)
      setText(text)
    },
    manual: true,
  })

  const addArticleRequest = useRequest(addArticle, {
    onSuccess() {
      message.success('文章添加成功！')
    },
    manual: true,
  })

  const updateArticleRequest = useRequest(updateArticle, {
    onSuccess() {
      message.success('文章修改成功！')
    },
    manual: true,
  })

  useEffect(() => {
    if (id) {
      getArticleDetailRequest.run(id)
    } else {
      editForm.setFieldsValue({ title: '', text: '', tags: [] })
      setTitle()
      setText()
    }
  }, [id])

  const onSubmit = (data) => {
    if (id) {
      return updateArticleRequest.run({ ...data, id })
    } else {
      return addArticleRequest.run(data)
    }
  }

  return (
    <Card>
      <Form.Provider
        onFormChange={(name, { changedFields }) => {
          if (name === 'edit') {
            const field = changedFields[0]
            if (field) {
              if (field.name[0] === 'title') {
                setTitle(field.value)
              }
              if (field.name[0] === 'text') {
                setText(field.value)
              }
            }
          }
        }}
      >
        <Row gutter={24}>
          <Col span={12}>
            <Editing form={editForm} onSubmit={onSubmit} />
          </Col>
          <Col span={12} style={{ height: '700px', overflow: 'auto' }}>
            <Title value={title} />
            <Text value={text} />
          </Col>
        </Row>
      </Form.Provider>
    </Card>
  )
}
