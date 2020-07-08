import React, { useState } from 'react'
import {
  Card,
  Form,
  Tag,
  Input,
  Button,
  Divider,
  message,
  Spin,
  Skeleton,
} from 'antd'
import { useRequest } from 'utils'
import { addTag, getTags, delTag } from './services'

export default () => {
  const [form] = Form.useForm()
  const getTagsRequest = useRequest(getTags)

  const addTagRequest = useRequest(addTag, {
    onSuccess() {
      message.success('标签添加成功！')
      getTagsRequest.run()
    },
    onError(err) {
      message.error(err.message)
    },
    manual: true,
  })

  const delTagRequest = useRequest(delTag, {
    onSuccess() {
      message.success('标签删除成功！')
      getTagsRequest.run()
    },
    manual: true,
  })

  return (
    <Card>
      <Form
        form={form}
        layout='inline'
        onFinish={(v) => {
          addTagRequest.run(v.name)
        }}
      >
        <Form.Item name='name' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            添加
          </Button>
        </Form.Item>
      </Form>
      <Divider />
      <Skeleton active loading={getTagsRequest.loading}>
        {getTagsRequest.data &&
          getTagsRequest.data.map((v) => (
            <Tag
              key={v.tag_id}
              visible={true}
              closable
              onClose={(_) => {
                delTagRequest.run(v.tag_id)
              }}
            >
              {v.name}
            </Tag>
          ))}
      </Skeleton>
    </Card>
  )
}
