import React from 'react'
import { useRequest } from 'utils'
import { List, Card, Skeleton, message } from 'antd'
import { useHistory } from 'react-router-dom'
import { getArticleList, delArticle } from './services'

export default () => {
  const history = useHistory()
  const getArticleListRequest = useRequest(getArticleList, {
    initialData: [],
  })
  const delArticleRequest = useRequest(delArticle, {
    onSuccess(res) {
      message.success('文章删除成功！')
      getArticleListRequest.run()
    },
    manual: true,
  })
  
  return (
    <Card>
      <List
        loading={getArticleListRequest.loading}
        itemLayout='horizontal'
        dataSource={
          getArticleListRequest.data ? getArticleListRequest.data : []
        }
        renderItem={(item) => (
          <List.Item
            actions={[
              <a
                onClick={() =>
                  history.push(`/articles/edit?id=${item.article_id}`)
                }
              >
                编辑
              </a>,
              <a
                onClick={() => {
                  delArticleRequest.run(item.article_id)
                }}
              >
                删除
              </a>,
            ]}
          >
            <List.Item.Meta
              // avatar={
              //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              // }
              title={<span>{item.title}</span>}
              // description='Ant Design, a design language for background applications, is refined by Ant UED Team'
            />
          </List.Item>
        )}
      />
    </Card>
  )
}
