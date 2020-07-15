import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Container from 'components/Container'
import IconFont from 'components/IconFont'
import classNames from 'classnames'
import routes from '@/config/routes'
import styles from './style.scss'

export default () => {
  const [style, setStyle] = useState('')
  const history = useHistory()

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
            {routes.map(
              (v) =>
                v.name && (
                  <li key={v.path} onClick={() => history.push(v.path)}>
                    <IconFont type={v.icon} />
                    <span className={styles.nav_item}>{v.name}</span>
                  </li>
                ),
            )}
            <li>
              <IconFont type='icon-github-fill' />
            </li>
          </ul>
        </Container>
      </nav>
    </div>
  )
}
