import Axios, { AxiosError, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { API } from '../config/Api'
import { Video } from '../interfaces/Video'

const useTeachingVideos = () => {
  const [teachingVideos, setTeachingVideos] = useState<Video[]>()

  const handleResponse = (response: AxiosResponse<Video[]>) => {
    console.info(response.data)
    setTeachingVideos(response.data)
  }

  useEffect(() => {
    const getMovie = async () => {
      await Axios.get(API.GET_TEACHING_VIDEOS)
        .then((res: AxiosResponse<Video[]>) => handleResponse(res))
        .catch((err: AxiosError) => console.error(err))
    }
    if (teachingVideos === undefined) {
      getMovie()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { teachingVideos }
}

export default useTeachingVideos
