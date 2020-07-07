import React from 'react'
import { Form, Input, Button } from 'antd'
import MdEditor from 'components/MdEditor'

export default ({ form, text, setTitle, setText, onSubmit }) => {
  return (
    <Form
      form={form}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      onFinish={(value) => {
        onSubmit(value)
      }}
    >
      <Form.Item name='title' label='标题' rules={[{ required: true }]}>
        <Input onChange={(e) => setTitle(e.target.value)} />
      </Form.Item>
      <Form.Item name='text' label='正文' rules={[{ required: true }]}>
        <MdEditor value={text} onChange={(value) => setText(value)} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button htmlType='submit'>提交</Button>
      </Form.Item>
    </Form>
  )
}
