import React, { useState } from 'react'
import * as H from 'history'
import { useParams } from 'react-router-dom'
import { Video } from '../interfaces/Video'
import VideoPlayer from '../components/VideoPlayer'
import { Button, Divider, Layout } from 'antd'
import Webcam from 'react-webcam'
import Result from '../components/Result'
const reader = new FileReader()

interface Props {
  history: H.History
}

const { Content } = Layout

const RecordPage = () => {
  const { title } = useParams<Video>()

  const webcamRef = React.useRef<any>(null)
  const mediaRecorderRef = React.useRef<any>(null)
  const [recordedChunks, setRecordedChunks] = React.useState([])

  const [isStarted, setStarted] = useState<boolean>(false)
  const [isWatched, setWatched] = useState<boolean>(false)

  const [videoData, setVideoData] = useState<any>()

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data))
      }
    },
    [setRecordedChunks]
  )

  const handleStartCapture = React.useCallback(() => {
    setStarted(true)
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: 'video/webm',
    })
    mediaRecorderRef.current.addEventListener(
      'dataavailable',
      handleDataAvailable
    )
    mediaRecorderRef.current.start()
  }, [webcamRef, mediaRecorderRef])

  const handleStopCapture = React.useCallback(() => {
    setWatched(true)
    mediaRecorderRef.current.stop()
  }, [mediaRecorderRef, webcamRef])

  const handleCompare = React.useCallback(() => {
    setStarted(false)
    setWatched(false)

    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: 'video/webm',
      })

      reader.readAsDataURL(blob)
      reader.onloadend = () => {
        const data = reader.result
        setVideoData(data)
      }
      setRecordedChunks([])
    }
  }, [recordedChunks])

  return (
    <Content>
      <div
        style={{
          backgroundColor: 'black',
          flexDirection: 'row',
          justifyContent: 'center',
          display: 'flex',
          padding: '10px',
        }}
      >
        <VideoPlayer
          playing={isStarted}
          onEnded={handleStopCapture}
          height={window.outerHeight - (window.outerHeight / 3) * 2.2}
          title={title}
        />
        <Webcam
          style={{ height: 'fit-content' }}
          mirrored={true}
          audio={false}
          ref={webcamRef}
        />
      </div>
      <div>
        {!isWatched ? (
          <Button onClick={handleStartCapture}>Start</Button>
        ) : (
          <Button onClick={handleCompare}>compare</Button>
        )}
      </div>
      <Divider />
      <div>
        {videoData ? <Result data={videoData} /> : <div></div>}
      </div>
    </Content>
  )
}

export default RecordPage
