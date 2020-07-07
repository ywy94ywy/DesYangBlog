import React from 'react'
import { md } from 'components/MdEditor'

export default ({ text }) => {
  return text ? (
    <div
      dangerouslySetInnerHTML={{
        __html: md.render(text),
      }}
    ></div>
  ) : null
}
