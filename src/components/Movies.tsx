import React from "react"
import { useMovieList } from "../hooks"
import useTeachingVideos from "../hooks/useTeachingVideos"
import { Movie } from "../interfaces/Movie"
import { MovieList } from "../interfaces/MovieList"

const Movies = () => {
  const { isLoading, teachingVideo } = useTeachingVideos()

  return (
    <div>
      {isLoading? <div><h1>Loading ...</h1></div>: 
      <ul>{teachingVideo?.data.map((movie: Movie) => {
        return <li key={movie.path}>{movie?.title}</li>
      })}</ul>
      }
    </div>
  )
}

export default Movies
