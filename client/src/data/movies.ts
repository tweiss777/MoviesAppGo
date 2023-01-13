import { IMovie } from "./IMovie";
import axios from "axios";
export async function getMovies(): Promise<IMovie[]>{
  const { data } = await axios.get('/v1/movies/get-movies')
  return data
}

