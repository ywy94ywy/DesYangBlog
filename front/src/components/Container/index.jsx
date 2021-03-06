import React from 'react'
import classNames from 'classnames'
import styles from './style.scss'

export default ({ className, style, children }) => {
  return (
    <div className={classNames(className, styles.container)} style={style}>
      {children}
    </div>
  )
}
