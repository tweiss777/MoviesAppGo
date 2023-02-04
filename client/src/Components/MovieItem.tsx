import { IMovie } from "../data/IMovie";
import '../scss/MovieItem.scss'

interface IProps extends IMovie{}

export default function MovieItem({title,year,genre}:IProps): JSX.Element{

  return(
    <div className="movie-item">
      <h3><strong>Title: {title}</strong></h3>
      <ul>
        <li>Year: {year}</li>
        <li>Genre: {genre}</li>
      </ul>
    </div>
  )

}