import React from 'react'
import { Space } from 'antd'

import ReactPlayer from 'react-player'
import { API } from '../config/Api'

interface VideoPlayerProps {
  title: string
}

const VideoPlayer = (props: VideoPlayerProps) => {
  return (
    <Space align="center" style={{ flexDirection: 'column' }}>
      <ReactPlayer
        height="300"
        playing={true}
        url={`${API.DOWNLOAD_TEACHING_VIDEO}/${props.title}`}
      />
    </Space>
  )
}

export default VideoPlayer
