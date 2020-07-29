import React from 'react'
import Container from '../Container'
import styles from './style.scss'

export default () => {
  return (
    <>
      <div className={styles.header}>
        <Container>
          <div className={styles.title}>BLOG NAME</div>
        </Container>
      </div>
      {/* <div className={styles.preview_overlay}>
        <svg
          className={styles.preview_waves}
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 24 150 28'
          preserveAspectRatio='none'
          shape-rendering='auto'
        >
          <defs>
            <path
              id='gentle-wave'
              d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
            ></path>
          </defs>
          <g className={styles.preview_parallax}>
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='0'
              fill='rgba(255, 255, 255, 0.7)'
            ></use>
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='3'
              fill='rgba(255, 255, 255, 0.5)'
            ></use>
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='5'
              fill='rgba(255, 255, 255, 0.3)'
            ></use>
            <use xlinkHref='#gentle-wave' x='48' y='7' fill='#fff'></use>
          </g>
        </svg>
      </div> */}
    </>
  )
}
