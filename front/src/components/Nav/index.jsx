import React, { useState, useEffect } from 'react'
import { Row, Icon } from 'antd'
import Container from 'components/Container'
import IconFont from 'components/IconFont'
import classNames from 'classnames'
import styles from './style.scss'

export default () => {
  const [style, setStyle] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !style) {
        setStyle(styles.scroll)
      } else if (window.scrollY <= 50 && !!style) {
        setStyle('')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [style])

  return (
    <div className={styles.nav_wrapper}>
      <nav className={classNames(styles.nav, style)}>
        <Container className={styles.container}>
          <div>logo</div>
          <ul>
            <li>
              <IconFont type='icon-home-fill' />
              <span className={styles.nav_item}>首页</span>
            </li>
            <li>
              <IconFont type='icon-tags-fill' />
              <span className={styles.nav_item}>标签</span>
            </li>
            <li>
              <IconFont type='icon-robot-fill' />
              <span className={styles.nav_item}>关于</span>
            </li>
            <li>
              <IconFont type='icon-github-fill' />
            </li>
          </ul>
        </Container>
      </nav>
    </div>
  )
}
