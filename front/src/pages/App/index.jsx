import React, { useState } from 'react'
import { Menu, Row, Col, Layout, Card, Tag } from 'antd'
import Container from 'components/Container'
import Nav from 'components/Nav'
import { useHistory } from 'react-router-dom'
import { useRequest } from 'utils'
import { getArticles, getTags } from './services'
import moment from 'moment'
import './style.scss'

export default () => {
  const history = useHistory()
  const getArticleRequest = useRequest(getArticles)
  const getTagsRequest = useRequest(getTags)
  const tagsMap = {}

  if (getTagsRequest.data) {
    getTagsRequest.data.forEach((v) => (tagsMap[v.tag_id] = v.name))
  }

  return (
    <>
      <Nav />
      <section>
        <Container>
          <Row gutter={[24, 24]}>
            <Col span={6}>
              <Card>
                <aside>作者</aside>
              </Card>
            </Col>
            <Col span={18}>
              {getArticleRequest.data &&
                getArticleRequest.data.map((v) => (
                  <Card
                    hoverable
                    key={v.article_id}
                    onClick={() => {
                      history.push('/article?p=' + v.article_id)
                    }}
                    style={{ marginBottom: 24 }}
                  >
                    <div>
                      <span>{moment(v.create_time).format('YYYY-MM-DD')}</span>
                      {getTagsRequest.data && (
                        <span style={{ marginLeft: 12 }}>
                          {v.tags.map((v) => (
                            <Tag key={v}>{tagsMap[v]}</Tag>
                          ))}
                        </span>
                      )}
                    </div>
                    <article>{v.title}</article>
                  </Card>
                ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
