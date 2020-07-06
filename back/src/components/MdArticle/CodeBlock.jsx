import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { routeros } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const CodeBlock = ({ value }) => {
  return (
    <SyntaxHighlighter language='' style={routeros}>
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
