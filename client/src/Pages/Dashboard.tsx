import MovieItem from '../Components/MovieItem'
import { movies } from '../models/moviesmock'

export default function DashBoard(){


  return (
    <div>
      <h1>Dashboard under construction</h1>
      <div>
        { movies.map(movie => <MovieItem id={movie.id} movie_name={movie.movie_name} year={movie.year} genre={movie.genre} />) }
      </div>
    </div>
  )
}
