import React from 'react'
import { Card, Layout } from 'antd'
import useTeachingVideos from '../hooks/useTeachingVideos'
import { Video } from '../interfaces/Video'
import { Link } from 'react-router-dom'

const TeachingVideos = () => {
  const { teachingVideos } = useTeachingVideos()
  return (
    <Layout>
      {teachingVideos?.map((v: Video) => (
        <Link to={`/video/${v}`} key={v.title}>
          <Card style={{ width: 300 }} title={v.title}></Card>
        </Link>
      ))}
    </Layout>
  )
}

export default TeachingVideos
