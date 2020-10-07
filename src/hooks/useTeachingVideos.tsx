import Axios, { AxiosError, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { API } from '../config/Api'
import { MovieList } from '../interfaces/MovieList'
import useIsLoading from './useIsLoading'

const useTeachingVideos = () => {
  const { isLoading, setIsLoading } = useIsLoading()
  const [teachingVideos, setTeachingVideos] = useState<MovieList>()

  const handleResponse = (response: AxiosResponse<MovieList>) => {
    console.info(response.data)
    setTeachingVideos(response.data)
  }

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true)
      await Axios.get(API.GET_TEACHING_VIDEO)
        .then((res: AxiosResponse) => handleResponse(res))
        .catch((err: AxiosError) => console.error(err))
        .finally(() => setIsLoading(false))
    }
    getMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isLoading, teachingVideos }
}

export default useTeachingVideos
