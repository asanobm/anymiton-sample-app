import Axios, { AxiosError, AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { API } from "../config/Api"
import { ACCESS_TOKEN } from "../config/Env"
import { MovieList } from "../interfaces/MovieList"
import useIsLoading from "./useIsLoading"

const useMovieList = () => {
  const {isLoading, setIsLoading} = useIsLoading()
  const [movies, setMovies] = useState<MovieList>()

  useEffect(() => {
    const getMovies = async () => {

      setIsLoading(true)
      return await Axios.get(
        API.GET_MOVIES,
          { headers: {
                Authorization: `${ACCESS_TOKEN}`,
            }
          })
          .then((res: AxiosResponse<MovieList>) => setMovies(res.data))
          .catch((err: AxiosError) => console.error(err))
          .finally(() => setIsLoading(false))
    }
    // one time run..
    if(movies === undefined && isLoading === false) {
      getMovies()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {isLoading, movies}
}

export default useMovieList
