/**
 * @page 字典管理
 * @todo 编辑
 */
import React from 'react'
import { Table, Card, Form, Input, Button, message, Space } from 'antd'
import { useRequest } from '@/utils'
import { addDictionary, getDictionarys, delDictionary } from './servers'
export default () => {
  const addDictionaryRequest = useRequest(addDictionary, {
    onSuccess() {
      message.success('标签添加成功！')
      getDictionarysRequest.run()
    },
    manual: true,
  })
  const getDictionarysRequest = useRequest(getDictionarys)
  const delDictionaryRequest = useRequest(delDictionary, {
    onSuccess() {
      message.success('标签删除成功！')
      getDictionarysRequest.run()
    },
    manual: true,
  })

  const columns = [
    {
      title: 'code',
      dataIndex: 'code',
    },
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'value',
      dataIndex: 'value',
      render(text) {
        return JSON.stringify(text)
      },
    },
    {
      title: 'options',
      render(record) {
        return (
          <Space>
            <a
              href=''
              onClick={(e) => {
                e.preventDefault()
              }}
              style={{ cursor: 'no-drop' }}
            >
              编辑
            </a>
            <a
              href=''
              onClick={(e) => {
                e.preventDefault()
                delDictionaryRequest.run({ id: record.id })
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
          try {
            JSON.parse(data.value)
            addDictionaryRequest.run(data)
          } catch (err) {
            console.log(err)
            message.error('value为JSON格式！')
          }
        }}
      >
        <Form.Item label='code' name='code' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label='name' name='name' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label='value' name='value' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8 }}>
          <Button htmlType='submit'>添加</Button>
        </Form.Item>
      </Form>
      <Table
        rowKey='id'
        columns={columns}
        loading={getDictionarysRequest.loading}
        dataSource={getDictionarysRequest.data}
      />
    </Card>
  )
}
