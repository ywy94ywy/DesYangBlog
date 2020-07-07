import React from 'react'
import { md } from 'components/MdEditor'

export default ({ title }) => {
  return title ? (
    <div
      dangerouslySetInnerHTML={{
        __html: md.render(`# ${title}`),
      }}
    ></div>
  ) : null
}
