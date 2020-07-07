import React from 'react'
import { useRequest } from 'utils'
import { List, Card, Skeleton } from 'antd'
import { useHistory } from 'react-router-dom'
import { getArticleList } from './services'

export default () => {
  const history = useHistory()
  const getArticleListRequest = useRequest(getArticleList, {
    initialData: { articles: [] },
    onSuccess(res) {
      console.log(res)
    },
  })

  return (
    <Card>
      <List
        loading={getArticleListRequest.loading}
        itemLayout='horizontal'
        dataSource={
          getArticleListRequest.data ? getArticleListRequest.data.articles : []
        }
        renderItem={(item) => (
          <List.Item
            actions={[
              <a
                onClick={() => {
                  // delArticle.run({
                  //   article_id: item.article_id,
                  // })
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
              title={
                <span
                  onClick={() =>
                    history.push(`/articles/edit?id=${item.article_id}`)
                  }
                >
                  {item.title}
                </span>
              }
              // description='Ant Design, a design language for background applications, is refined by Ant UED Team'
            />
          </List.Item>
        )}
      />
    </Card>
  )
}
