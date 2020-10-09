import React from 'react'
import { Layout, Space, Typography } from 'antd'
import { useParams } from 'react-router-dom'
import { Video } from '../interfaces/Video'
import * as H from 'history'
import ReactPlayer from 'react-player'
import { API } from '../config/Api'
import VideoPlayer from '../components/VideoPlayer'

const { Title } = Typography

interface Props {
  history: H.History
}

const VideoPage = (props: Props) => {
  console.log(props.history)
  const { title } = useParams<Video>()

  const handleEndedVideo = () => {
    props.history.push(`/record/${title}`)
  }

  return (
    <Layout
      style={{
        backgroundColor: 'black',
        height: 'calc(100vh - 46px)',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <VideoPlayer
        height={window.outerHeight - window.outerHeight / 2}
        title={title}
        playing={true}
        onEnded={handleEndedVideo}
      />
    </Layout>
  )
}

export default VideoPage
