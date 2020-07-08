import React from 'react'
import { md } from 'components/MdEditor'

export default ({ value }) => {
  return value ? (
    <div
      dangerouslySetInnerHTML={{
        __html: md.render(`# ${value}`),
      }}
    ></div>
  ) : null
}
