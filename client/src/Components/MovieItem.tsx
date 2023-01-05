import { IMovie } from "../models/moviesmock";


interface IProps extends IMovie{}

export default function MovieItem({movie_name,year,genre}:IProps): JSX.Element{

  return(
    <div>
      <h3><strong>Title: {movie_name}</strong></h3>
      <ul>
        <li>Year: {year}</li>
        <li>Genre: {genre}</li>
      </ul>
    </div>
  )

}