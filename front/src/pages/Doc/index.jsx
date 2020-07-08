import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Nav from 'components/Nav'
import Container from 'components/Container'
import MdArticle from 'components/MdArticle'
import { useRequest, useQuery } from 'utils'
import { Button, Card, Spin } from 'antd'
import { getArticleDetail } from './services'

export default () => {
  const history = useHistory()
  const query = useQuery()
  const getArticleDetailRequest = useRequest(getArticleDetail, { manual: true })
  const id = query.get('p')

  useEffect(() => {
    if (id) {
      getArticleDetailRequest.run(id)
    }
  }, [id])

  if (!getArticleDetailRequest.data) {
    return <Spin />
  }

  return (
    <div>
      <Nav />
      <Container>
        <Card>
          <Button
            onClick={() => {
              history.push('/')
            }}
          >
            history back
          </Button>
          <h1>{getArticleDetailRequest.data.title}</h1>
          <MdArticle source={getArticleDetailRequest.data.text} />
        </Card>
      </Container>
    </div>
  )
}
