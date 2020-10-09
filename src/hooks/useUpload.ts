import Axios, { AxiosError, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { API } from '../config/Api'
import { UploadResult } from '../interfaces/UploadResult'
import useLoading from './useLoading'

const useUpload = (data: any) => {
  const { setLoading } = useLoading()
  const [result, setResult] = useState<UploadResult>()

  const handleResponse = (response: AxiosResponse<UploadResult>) => {
    console.info(response.data)
    setResult(result)
    setLoading(false)
  }

  useEffect(() => {
    const upload = async () => {
      console.log('--- call api ---')
      setLoading(true)
      await Axios.post(API.UPLOAD_STUDENT_VIDEO, { data })
        .then((res: AxiosResponse<UploadResult>) => handleResponse(res))
        .catch((err: AxiosError) => {
          console.error(err.message)
        })
    }
    upload()
  }, [])

  return { result }
}

export default useUpload
