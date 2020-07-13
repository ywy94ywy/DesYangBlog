import React from "react";
import { Form, Input, Button, Select, Spin } from "antd";
import MdEditor from "components/MdEditor";
import { useRequest } from "utils";
import { getTags } from "../Tags/services";

export default ({ form, onSubmit }) => {
  const getTagsRequest = useRequest(getTags);

  if (!getTagsRequest.data) {
    return <Spin />;
  }

  return (
    <Form
      name="edit"
      form={form}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      onFinish={(value) => {
        onSubmit(value);
      }}
      initialValues={{
        original: 0,
      }}
    >
      <Form.Item name="title" label="标题" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="tags" label="标签">
        <Select mode="multiple">
          {getTagsRequest.data.map((v) => (
            <Select.Option value={v.id} key={v.id}>
              {v.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="original" label="原创">
        <Select>
          <Select.Option value={0}>非原创</Select.Option>
          <Select.Option value={1}>原创</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="text" label="正文" rules={[{ required: true }]}>
        <MdEditor />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  );
};
