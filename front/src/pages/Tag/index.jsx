import React, { Suspense } from 'react'
import { Tag, Spin } from 'antd'
import { useRequest } from '@/utils'
import { getTags } from './services'

export default () => {
  const getTagsRequest = useRequest(getTags, {
    onSuccess(res) {
      // console.log(res)
    },
  })

  if (!getTagsRequest.data) {
    return <Spin />
  }

  return (
    <div>
      {getTagsRequest.data.map((v) => (
        <Tag key={v.id} style={{ cursor: 'pointer' }}>
          {v.name}
        </Tag>
      ))}
    </div>
  )
}
