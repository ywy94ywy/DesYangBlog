import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Nav from 'components/Nav'
import Container from 'components/Container'
import MdArticle from 'components/MdArticle'
import { http } from 'utils'
import {
  Button,
  Card,
  Layout,
  Menu,
  PageHeader,
  Upload,
  message,
  Form,
  Input,
} from 'antd'
import { InboxOutlined } from '@ant-design/icons'

export default withRouter(({ history, location }) => {
  // const [article, setArticle] = useState('')

  useEffect(() => {
    // const id = location.search.split('=')[1]
    // if (id) {
    http.post('/articles/get').then((res) => {
      // setArticle(res.article)
      console.log(res)
    })
    // }
  }, [])

  return (
    <Layout>
      <Layout.Sider>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item key='1'>nav 1</Menu.Item>
          <Menu.Item key='2'>nav 2</Menu.Item>
          <Menu.Item key='3'>nav 3</Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout.Content>
        <PageHeader
          title='Title'
          subTitle='This is a subtitle'
          breadcrumb={{ routes }}
          style={{
            background: 'white',
          }}
        />
        <div
          style={{
            padding: 24,
            minHeight: 280,
          }}
        >
          <Card>
            <Form
              style={{ width: 400 }}
              labelCol={{ span: 8 }}
              onFinish={({ title, content }) => {
                const formData = new FormData()
                formData.append('title', title)
                formData.append('content', content.file)

                http.post('/articles/add', formData).then((res) => {
                  console.log(res)
                })
              }}
              onFinishFailed={(v) => {
                console.log(v)
              }}
            >
              <Form.Item
                name='title'
                label='文章标题'
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name='content'
                label='文章内容'
                rules={[{ required: true }]}
                valuePropName='file'
              >
                <Upload.Dragger accept='.md' beforeUpload={() => false}>
                  <p className='ant-upload-drag-icon'>
                    <InboxOutlined />
                  </p>
                  <p className='ant-upload-text'>将md文件拖拽于此</p>
                </Upload.Dragger>
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8 }}>
                <Button htmlType='submit'>提交</Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Layout.Content>
    </Layout>
  )
})

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
]
