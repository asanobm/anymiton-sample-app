import Axios, { AxiosError, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { API } from '../config/Api'
import { MovieList } from '../interfaces/MovieList'
import useIsLoading from './useIsLoading'

const useTeachingVideos = () => {
  const { isLoading, setIsLoading } = useIsLoading()
  const [teachingVideo, setTeachingVideo] = useState<MovieList>()

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true)
      await Axios.get(API.GET_TEACHING_VIDEO)
        .then((res: AxiosResponse) => setTeachingVideo(res))
        .catch((err: AxiosError) => console.error(err))
        .finally(() => setIsLoading(false))
    }
    getMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isLoading, teachingVideo }
}

export default useTeachingVideos
