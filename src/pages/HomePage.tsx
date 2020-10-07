import { Layout } from 'antd'
import { Typography } from 'antd'
import React from 'react'
import TeachingVideos from '../components/TeachingVideos'

const { Title } = Typography

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Title>Home Page</Title>
      <TeachingVideos />
    </Layout>
  )
}

export default HomePage
