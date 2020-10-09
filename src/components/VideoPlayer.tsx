import React from 'react'
import { Space } from 'antd'

import ReactPlayer from 'react-player'
import { API } from '../config/Api'

interface VideoPlayerProps {
  title: string
  playing?: boolean
  height: number
  onPlay?: () => void
  onEnded?: () => void
}

const VideoPlayer = (props: VideoPlayerProps) => {
  return (
    <ReactPlayer
      onPlay={props.onPlay}
      onEnded={props.onEnded}
      height={props.height}
      playing={props.playing ? true : false}
      url={`${API.DOWNLOAD_TEACHING_VIDEO}/${props.title}`}
    />
  )
}

export default VideoPlayer
