import React from 'react'
import { Layout, Space, Typography } from 'antd'
import { useParams } from 'react-router-dom'
import { Video } from '../interfaces/Video'

import ReactPlayer from 'react-player'
import { API } from '../config/Api'
import VideoPlayer from '../components/VideoPlayer'

const { Title } = Typography

const VideoPage: React.FC = () => {
  const { title } = useParams<Video>()
  console.log(title)
  return (
    <Layout style={{ backgroundColor: 'black', height: 'calc(100vh - 46px)' }}>
      <Title>Teaching Video: {title}</Title>
      <VideoPlayer title={title} />
    </Layout>
  )
}

export default VideoPage
