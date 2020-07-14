import React from 'react'
import IconFont from 'components/IconFont'
import { useHistory } from 'react-router-dom'
import { getArticles, getTags } from './services'
import moment from 'moment'
import { useRequest } from 'utils'
import styles from './style.scss'

export default () => {
  const history = useHistory()
  const getArticleRequest = useRequest(getArticles)
  const getTagsRequest = useRequest(getTags)
  const tagsMap = {}

  if (getTagsRequest.data) {
    getTagsRequest.data.forEach((v) => (tagsMap[v.id] = v.name))
  }

  return (
    <>
      {!getArticleRequest.data ? (
        'loading...'
      ) : (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1 }}>
            {getArticleRequest.data.map((v) => {
              return (
                <article key={v.id} className={styles.article}>
                  <div>
                    <h1>
                      <a
                        onClick={() => {
                          history.push('/article?p=' + v.id)
                        }}
                      >
                        {v.title}
                      </a>
                      {v.tags.map((v) => (
                        <span
                          key={v}
                          style={{
                            fontSize: 12,
                            background: '#ccc',
                            marginLeft: 12,
                            padding: '0 4px',
                          }}
                        >
                          {tagsMap[v]}
                        </span>
                      ))}
                    </h1>
                  </div>
                  <p>
                    正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
                  </p>
                  <footer className={styles.footer}>
                    <a
                      onClick={(e) => {
                        e.preventDefault()
                        history.push('/article?p=' + v.id)
                      }}
                    >
                      继续阅读
                    </a>
                    <ul style={{ display: 'flex' }}>
                      <li>
                        <IconFont type='icon-calendar' />
                        发布日期：
                        {moment(v.create_time).format('YYYY-MM-DD')}
                      </li>
                      {/* <li>
                            <IconFont type='icon-file-word' />
                            文章字数：
                          </li>
                          <li>
                            <IconFont type='icon-time-circle' />
                            阅读时长：
                          </li>
                          <li>
                            <IconFont type='icon-eye' />
                            阅读次数：
                          </li> */}
                    </ul>
                  </footer>
                </article>
              )
            })}
          </div>
          <div style={{ width: 300, marginLeft: 24 }}>
            <h1>杂</h1>
          </div>
        </div>
      )}
    </>
  )
}
