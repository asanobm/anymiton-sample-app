import React from 'react'
import { Layout, Typography } from 'antd'
import { useParams } from 'react-router-dom'
import { Video } from '../interfaces/Video'

const { Title } = Typography

const VideoPage: React.FC = () => {
  const { title } = useParams<Video>()
  console.log(title)
  return (
    <Layout>
      <Title>Teaching Video: {title}</Title>
    </Layout>
  )
}

export default VideoPage
