import Axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../config/Api'
import useUpload from '../hooks/useUpload'
import { UploadResult } from '../interfaces/UploadResult'

interface Props {
  data: any
}

const Result = (props: Props) => {

  const [results, setResults] = useState<UploadResult>()

  useEffect(() => {
    const upload = async() => {
      console.log('upload start')
      await Axios.post(API.UPLOAD_STUDENT_VIDEO, {data:props.data})
      .then((res: AxiosResponse<UploadResult>) => setResults(res.data))
    }
    upload()
  })

  return (
    <pre>{JSON.stringify(results)}
    </pre>
  )
}

export default Result
