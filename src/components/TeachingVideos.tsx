import { Layout } from 'antd'
import React from 'react'
import useTeachingVideos from '../hooks/useTeachingVideos'

const TeachingVideos = () => {
  const { teachingVideos } = useTeachingVideos()
  return (
    <Layout>
      <span>teaching videos</span>
    </Layout>
  )
}

export default TeachingVideos
