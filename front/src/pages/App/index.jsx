import React, { useState } from 'react'
import { Menu, Row, Col, Layout, Card } from 'antd'
import Container from 'components/Container'
import Nav from 'components/Nav'
import { withRouter } from 'react-router-dom'
import './style.scss'

export default withRouter(({ history }) => {
  return (
    <>
      <Nav />
      <section>
        <Container>
          <Row gutter={[24, 24]}>
            <Col span={6}>
              <Card>
                <aside>1</aside>
              </Card>
            </Col>
            <Col span={18}>
              <Card
                hoverable
                onClick={() => {
                  history.push('/a?p=1')
                }}
              >
                <article
                  onClick={(e) => {
                    e.stopPropagation()

                    console.log(123)
                  }}
                >
                  2
                </article>
              </Card>
              <Card
                hoverable
                style={{ marginTop: 24 }}
                onClick={() => {
                  history.push('/a?p=2')
                }}
              >
                <article>2</article>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
})
