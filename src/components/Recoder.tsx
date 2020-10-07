import React, { useRef, useCallback, useState } from 'react'
import { Button, Layout } from 'antd'
import Webcam from 'react-webcam'
import Axios, { AxiosResponse } from 'axios'
import { API } from '../config/Api'

const reader = new FileReader()
const Recoder = () => {
  const webcamRef = React.useRef<any>(null)
  const mediaRecorderRef = React.useRef<any>(null)
  const [capturing, setCapturing] = React.useState(false)
  const [recordedChunks, setRecordedChunks] = React.useState([])

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true)
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: 'video/webm',
    })
    mediaRecorderRef.current.addEventListener(
      'dataavailable',
      handleDataAvailable
    )
    mediaRecorderRef.current.start()
  }, [webcamRef, setCapturing, mediaRecorderRef])

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data))
      }
    },
    [setRecordedChunks]
  )

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop()
    setCapturing(false)
  }, [mediaRecorderRef, webcamRef, setCapturing])

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: 'video/webm',
      })

      reader.readAsDataURL(blob)
      reader.onloadend = () => {
        const data = reader.result
        Axios.post(API.UPLOAD_STUDENT_VIDEO, { data })
      }

      // .text()
      // .then((text: string) => {
      //   console.log(text)
      //   Axios.post(API.UPLOAD_STUDENT_VIDEO, { video: text }).then((res) =>
      //     console.info(res)
      //   )
      // })

      // reader.readAsDataURL(blob)
      // reader.onloadend = () => {
      //   const base64data = reader.result
      //   Axios.post(API.UPLOAD_STUDENT_VIDEO, { base64data }).then((res) => {
      //     console.info(res)
      //   })
      // }

      // .text()
      // .then((v: string) => {
      //   Axios.post(API.UPLOAD_STUDENT_VIDEO, {
      //     video: v,
      //   }).then((res: AxiosResponse) => console.log(res))
      // })

      // const url = URL.createObjectURL(blob)
      // const a = document.createElement('a')
      // document.body.appendChild(a)
      // a.href = url
      // a.download = 'react-webcam-stream-capture.webm'
      // a.click()
      // window.URL.revokeObjectURL(url)
      setRecordedChunks([])
    }
  }, [recordedChunks])

  return (
    <>
      <Webcam
        mirrored={true}
        audio={false}
        width={window.outerWidth - 100}
        style={{ position: 'absolute', top: 200, left: 50 }}
        ref={webcamRef}
      />
      {capturing ? (
        <Button onClick={handleStopCaptureClick}>Stop Capture</Button>
      ) : (
        <Button onClick={handleStartCaptureClick}>Start Capture</Button>
      )}
      {recordedChunks.length > 0 && (
        <Button onClick={handleDownload}>Download</Button>
      )}
    </>
  )
}

export default Recoder
