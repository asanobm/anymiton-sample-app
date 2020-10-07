import { Card, Layout } from 'antd'
import Axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../config/Api'
import useIsLoading from '../hooks/useIsLoading'
import useTeachingVideos from '../hooks/useTeachingVideos'
import { Video } from '../interfaces/Video'

const TeachingVideos = () => {
  const { teachingVideos } = useTeachingVideos()
  return (
    <Layout>
      {teachingVideos?.map((v: Video) => (
        <Card key={v.title} title={v.title}></Card>
      ))}
    </Layout>
  )
}

export default TeachingVideos
