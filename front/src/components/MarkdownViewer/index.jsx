import React, { useState, useEffect, useRef } from 'react'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import toc from 'markdown-it-toc-done-right'
import anchor from 'markdown-it-anchor'
import uslug from 'uslug'
import 'highlight.js/styles/rainbow.css'

const uslugify = (s) => uslug(s)

const md = new MarkdownIt({
  // html: true,
  linkify: true,
  xhtmlOut: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }

    return ''
    // // 此处判断是否有添加代码语言
    // if (lang && hljs.getLanguage(lang)) {
    //   try {
    //     // 得到经过highlight.js之后的html代码
    //     const preCode = hljs.highlight(lang, str, true).value
    //     // 以换行进行分割
    //     const lines = preCode.split(/\n/).slice(0, -1)
    //     // 添加自定义行号
    //     let html = lines
    //       .map((item, index) => {
    //         return (
    //           '<li><span class="line-num" data-line="' +
    //           (index + 1) +
    //           '"></span>' +
    //           item +
    //           '</li>'
    //         )
    //       })
    //       .join('')
    //     html = '<ol>' + html + '</ol>'
    //     // 添加代码语言
    //     if (lines.length) {
    //       html += '<b class="name">' + lang + '</b>'
    //     }
    //     return '<pre class="hljs"><code>' + html + '</code></pre>'
    //   } catch (__) {}
    // }
    // // 未添加代码语言，此处与上面同理
    // const preCode = md.utils.escapeHtml(str)
    // const lines = preCode.split(/\n/).slice(0, -1)
    // let html = lines
    //   .map((item, index) => {
    //     return (
    //       '<li><span class="line-num" data-line="' +
    //       (index + 1) +
    //       '"></span>' +
    //       item +
    //       '</li>'
    //     )
    //   })
    //   .join('')
    // html = '<ol>' + html + '</ol>'
    // return '<pre class="hljs"><code>' + html + '</code></pre>'
  },
})

md.use(anchor, {
  permalink: true,
  permalinkBefore: true,
  permalinkSymbol: '',
  slugify: uslugify,
}).use(toc, {
  slugify: uslugify,
  callback(html, ast) {
    md.html = html
    md.ast = ast
  },
})

const MarkdownViewer = ({ source }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: md.render(source),
      }}
    ></div>
  )
}

export const useMarkDown = (source) => {
  const [contents, setContents] = useState('')
  const text = md.render(source)

  useEffect(() => {
    setContents({
      html: md.html,
      ast: md.ast,
    })
  }, [source])

  return [text, contents]
}

export default MarkdownViewer
