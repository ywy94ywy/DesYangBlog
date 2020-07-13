import React from 'react'
import Container from '../Container'
import styles from './style.scss'

export default () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.title}>BLOG NAME</div>
      </Container>
    </div>
  )
}
