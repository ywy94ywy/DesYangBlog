import React from 'react'
import { Row } from 'antd'
import Container from 'components/Container'
import logo from 'assets/imgs/logo.png'

export default () => {
  return (
    <nav>
      <Container>
        <Row justify='space-between'>
          <div>
            <img src={logo} alt='' />
          </div>
          <div>menulist</div>
        </Row>
      </Container>
    </nav>
  )
}
