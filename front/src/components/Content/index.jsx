import React from 'react'
import classNames from 'classnames'
import styles from './style.scss'

export default ({ children, style, className }) => {
  return (
    <div className={classNames(styles.content, className)} style={style}>
      {children}
    </div>
  )
}
