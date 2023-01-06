import { IMovie } from "../data/moviesmock";
import '../scss/MovieItem.scss'

interface IProps extends IMovie{}

export default function MovieItem({movie_name,year,genre}:IProps): JSX.Element{

  return(
    <div className="movie-item">
      <h3><strong>Title: {movie_name}</strong></h3>
      <ul>
        <li>Year: {year}</li>
        <li>Genre: {genre}</li>
      </ul>
    </div>
  )

}