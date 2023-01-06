import MovieItem from '../Components/MovieItem'
import { getMovies } from '../data/movies' 
import { useState, useEffect } from 'react'
import { IMovie } from '../data/moviesmock'
export default function DashBoard(){
  const [movies, setMovies] = useState<IMovie[]>([])
  useEffect(() => {
    const fetchMovies = async () => {
      const movies: IMovie[] = await getMovies()
      setMovies(movies)
    }
     fetchMovies()
  })

  const movieComponents: JSX.Element [] = movies.map(movie => <MovieItem id={movie.id} movie_name={movie.movie_name} year={movie.year} genre={movie.genre} />)

  return (
    <div>
      <h1>Dashboard under construction</h1>
      <div>
        { movieComponents }
      </div>
    </div>
  )
}
