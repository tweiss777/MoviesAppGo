import { IMovie } from "./moviesmock";
import axios from "axios";
export async function getMovies(): Promise<IMovie[]>{
  const { data } = await axios.get('/movies/get-movies')
  return data``
}