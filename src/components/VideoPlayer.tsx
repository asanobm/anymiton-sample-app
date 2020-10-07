import React from 'react'

import { Layout } from 'antd'
import { Video } from '../interfaces/Video'

const VideoPlayer: React.FC<Video> = (prop: Video) => {
  return (
    <Layout>
      <span>player</span>
    </Layout>
  )
}

export default VideoPlayer
