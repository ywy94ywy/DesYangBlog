import React from 'react'
import ReactMarkdown from 'react-markdown'
import codeBlock from './CodeBlock'

export default ({ source }) => {
  return (
    <ReactMarkdown
      source={source}
      escapeHtml={false}
      renderers={{
        code: codeBlock,
      }}
    />
  )
}
