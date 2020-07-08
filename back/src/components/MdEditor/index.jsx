import React, { forwardRef, useState, useEffect, useRef } from 'react'
import { message } from 'antd'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import hljs from 'highlight.js'
import 'react-markdown-editor-lite/lib/index.css'
import 'highlight.js/styles/rainbow.css'

export const md = new MarkdownIt({
  // html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    // 此处判断是否有添加代码语言
    if (lang && hljs.getLanguage(lang)) {
      try {
        // 得到经过highlight.js之后的html代码
        const preCode = hljs.highlight(lang, str, true).value
        // 以换行进行分割
        const lines = preCode.split(/\n/).slice(0, -1)
        // 添加自定义行号
        let html = lines
          .map((item, index) => {
            return (
              '<li><span class="line-num" data-line="' +
              (index + 1) +
              '"></span>' +
              item +
              '</li>'
            )
          })
          .join('')
        html = '<ol>' + html + '</ol>'
        // 添加代码语言
        if (lines.length) {
          html += '<b class="name">' + lang + '</b>'
        }
        return '<pre class="hljs"><code>' + html + '</code></pre>'
      } catch (__) {}
    }
    // 未添加代码语言，此处与上面同理
    const preCode = md.utils.escapeHtml(str)
    const lines = preCode.split(/\n/).slice(0, -1)
    let html = lines
      .map((item, index) => {
        return (
          '<li><span class="line-num" data-line="' +
          (index + 1) +
          '"></span>' +
          item +
          '</li>'
        )
      })
      .join('')
    html = '<ol>' + html + '</ol>'
    return '<pre class="hljs"><code>' + html + '</code></pre>'
  },
})

const activeStyle = {
  outline: '1px dashed blue',
}

export default forwardRef(({ value, onChange, ...props }, ref) => {
  const [style, setStyle] = useState()
  const dropRef = useRef()

  const handleDragEnter = () => {
    setStyle(activeStyle)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDragLeave = () => {
    setStyle()
  }
  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setStyle()
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0]
      if (file.name.match(/\.(md|txt)$/)) {
        const reader = new FileReader()
        reader.onload = () => {
          console.log(reader.result)
          window.a = reader.result
          onChange(reader.result)
        }

        reader.readAsText(e.dataTransfer.files[0])
      } else {
        message.error('文件格式不正确')
      }
    }
  }

  useEffect(() => {
    const dropEl = dropRef.current
    dropEl.addEventListener('dragenter', handleDragEnter)
    dropEl.addEventListener('dragover', handleDragOver)
    dropEl.addEventListener('drop', handleDrop)
    dropEl.addEventListener('dragleave', handleDragLeave)
    return () => {
      dropEl.removeEventListener('dragenter', handleDragEnter)
      dropEl.removeEventListener('dragover', handleDragOver)
      dropEl.removeEventListener('drop', handleDrop)
      dropEl.removeEventListener('dragleave', handleDragLeave)
    }
  }, [])

  return (
    <div style={{ ...style }} ref={dropRef}>
      <MdEditor
        ref={ref}
        style={{ height: '500px' }}
        view={{
          md: true,
          menu: true,
        }}
        canView={{}}
        value={value}
        onChange={({ text }) => {
          onChange && onChange(text)
        }}
        {...props}
      />
    </div>
  )
})
