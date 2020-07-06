import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Nav from 'components/Nav'
import Container from 'components/Container'
import MdArticle from 'components/MdArticle'
import { http } from 'utils'
import { Button, Card } from 'antd'

export default withRouter(({ history, location }) => {
  const [article, setArticle] = useState('')

  useEffect(() => {
    const id = location.search.split('=')[1]
    if (id) {
      http
        .get('/articles', {
          params: {
            id,
          },
        })
        .then((res) => {
          setArticle(res.article)
        })
    }
  }, [])

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
          <MdArticle source={article} />
        </Card>
      </Container>
    </div>
  )
})
