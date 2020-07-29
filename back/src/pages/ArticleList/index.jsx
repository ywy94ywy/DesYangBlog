import React from 'react'
import { useRequest } from 'utils'
import { List, Card, Skeleton, message, Table, Switch, Space } from 'antd'
import { useHistory } from 'react-router-dom'
import { getArticleList, delArticle } from './services'

export default () => {
  const history = useHistory()
  const getArticleListRequest = useRequest(getArticleList, {
    initialData: [],
  })
  const delArticleRequest = useRequest(delArticle, {
    onSuccess() {
      message.success('文章删除成功！')
      getArticleListRequest.run()
    },
    manual: true,
  })

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    // {
    //   title: '标签',
    //   dataIndex: 'tags',
    // },
    // {
    //   title: '是否发布',
    //   dataIndex: 'published',
    //   render(text) {
    //     return <Switch checked={text} />
    //   },
    // },
    {
      title: '操作',
      render(_, record) {
        return (
          <Space>
            <a onClick={() => history.push(`/articles/edit?id=${record.id}`)}>
              编辑
            </a>
            <a
              onClick={() => {
                delArticleRequest.run(record.id)
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
      <Table
        rowKey='id'
        columns={columns}
        dataSource={getArticleListRequest.data}
        loading={getArticleListRequest.loading}
      />
    </Card>
  )
}
