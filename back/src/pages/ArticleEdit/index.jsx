/**
 * @page 添加文章
 * @todo 图片上传
 */
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Card, message, Form, Row, Col } from 'antd'
import { useRequest } from 'utils'
import { addArticle, getArticleDetail, updateArticle } from './services'
import Editing from './Editing'
import Text from './Text'
import Title from './Title'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

export default () => {
  // const history = useHistory()
  const query = useQuery()
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [form] = Form.useForm()
  const id = query.get('id')

  const getArticleDetailRequest = useRequest(getArticleDetail, {
    onSuccess(res) {
      const { title, text } = res
      form.setFieldsValue({ title, text })
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
    }
  }, [id])

  const onSubmit = (data) => {
    if (id) {
      return updateArticleRequest.run(data)
    } else {
      return addArticleRequest.run(data)
    }
  }

  return (
    <Card>
      <Row gutter={24}>
        <Col span={12}>
          <Editing
            form={form}
            text={text}
            setText={setText}
            setTitle={setTitle}
            onSubmit={onSubmit}
          />
        </Col>
        <Col span={12} style={{ height: '700px', overflow: 'auto' }}>
          <Title title={title} />
          <Text text={text} />
        </Col>
      </Row>
    </Card>
  )
}
