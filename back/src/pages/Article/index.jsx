import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import MdArticle from "components/MdArticle";
import { http } from "utils";
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
  List,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useRequest } from "ahooks";

export default withRouter(({ history, location }) => {
  const [upload, setUpload] = useState({ fileList: [] });
  const [articleList, setArticleList] = useState([]);
  const getArticles = useRequest("/articles/getList", {
    requestMethod: (url) => http.post(url),
    onSuccess(res) {
      setArticleList(res.articles);
    },
  });
  const addArticle = useRequest(
    (data) => ({
      url: "/articles/add",
      data,
    }),
    {
      requestMethod: ({ url, data }) =>
        http.post(url, data).then((res) => {
          console.log(res);
        }),
      onSuccess(res) {
        getArticles.run();
      },
      manual: true,
    }
  );
  const delArticle = useRequest(
    (data) => ({
      url: "/articles/del",
      data,
    }),
    {
      requestMethod: ({ url, data }) =>
        http.post(url, data).then((res) => {
          console.log(res);
        }),
      onSuccess(res) {
        getArticles.run();
      },
      manual: true,
    }
  );

  return (
    <Layout>
      <Layout.Sider>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout.Content>
        <PageHeader
          title="Title"
          subTitle="This is a subtitle"
          breadcrumb={{ routes }}
          style={{
            background: "white",
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
                const formData = new FormData();
                formData.append("title", title);
                formData.append("content", content.file);

                addArticle.run(formData);
              }}
              onFinishFailed={(v) => {
                console.log(v);
              }}
            >
              <Form.Item
                name="title"
                label="文章标题"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="content"
                label="文章内容"
                rules={[{ required: true }]}
                valuePropName="file"
              >
                <Upload.Dragger
                  accept=".md"
                  beforeUpload={() => false}
                  fileList={upload.fileList}
                  onChange={({ file, fileList }) =>
                    setUpload({
                      file,
                      fileList: fileList.slice(-1),
                    })
                  }
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">将md文件拖拽于此</p>
                </Upload.Dragger>
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8 }}>
                <Button htmlType="submit">提交</Button>
              </Form.Item>
            </Form>
            <List
              loading={getArticles.loading}
              itemLayout="horizontal"
              dataSource={articleList}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <a
                      onClick={() => {
                        delArticle.run({
                          article_id: item.article_id,
                        });
                      }}
                    >
                      删除
                    </a>,
                  ]}
                >
                  {/* <Skeleton avatar title={false} loading={item.loading} active> */}
                  <List.Item.Meta
                    // avatar={
                    //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    // }
                    title={item.title}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                  <div>content</div>
                  {/* </Skeleton> */}
                </List.Item>
              )}
            />
          </Card>
        </div>
      </Layout.Content>
    </Layout>
  );
});

const routes = [
  {
    path: "index",
    breadcrumbName: "First-level Menu",
  },
  {
    path: "first",
    breadcrumbName: "Second-level Menu",
  },
  {
    path: "second",
    breadcrumbName: "Third-level Menu",
  },
];
