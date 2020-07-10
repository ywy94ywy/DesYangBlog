/**
 * @page 标签管理
 * @todo 编辑
 */
import React from 'react'
import {
  Card,
  Form,
  Tag,
  Input,
  Select,
  Button,
  Divider,
  message,
  Space,
  Table,
} from 'antd'

import { useRequest } from 'utils'
import { addTag, getTags, delTag } from './services'
import { getDictionarys } from '../Dictionary/servers'

export default () => {
  const getTagsRequest = useRequest(getTags)
  const getDictionarysRequest = useRequest(getDictionarys)

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

  const columns = [
    {
      title: '标签名称',
      dataIndex: 'name',
      render(text) {
        return <Tag>{text}</Tag>
      },
    },
    {
      title: '标签类别',
      dataIndex: 'type',
    },
    {
      title: '操作',
      render(_, record) {
        return (
          <Space>
            <a style={{ cursor: 'no-drop' }}>编辑</a>
            <a
              onClick={() => {
                delTagRequest.run(record.id)
              }}
            >
              删除
            </a>
          </Space>
        )
      },
    },
  ]

  return (
    <Card>
      <Form
        style={{ width: 500 }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={(data) => {
          addTagRequest.run(data)
        }}
      >
        <Form.Item label='name' name='name' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label='type' name='type' rules={[{ required: true }]}>
          <Select loading={getDictionarysRequest.loading}>
            {getDictionarysRequest.data &&
              getDictionarysRequest.data[0].value.map((v) => (
                <Select.Option value={v.key} key={v.key}>
                  {v.value}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8 }}>
          <Button htmlType='submit'>添加</Button>
        </Form.Item>
      </Form>
      <Divider />
      <Table
        rowKey='id'
        columns={columns}
        loading={getTagsRequest.loading}
        dataSource={getTagsRequest.data}
      />
    </Card>
  )
}
