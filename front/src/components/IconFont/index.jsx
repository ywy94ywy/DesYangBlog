import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1940225_qsdk5mxhmv.js',
})

export default ({ type }) => {
  return <IconFont type={type} />
}
