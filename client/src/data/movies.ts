import { IMovie } from "./IMovie";
import axios from "axios";

export async function getMovies(): Promise<IMovie[]>{
  try{
    const { data } = await axios.get('/v1/movies/get-movies')
    return data
  } catch(err){
    throw new Error(err as string)
  }
 
}

export async function addMovie(movie:IMovie){
  try{
    const { data } = await axios.post('/v1/movies/',movie)
    return data 
  } catch(err){
    throw new Error(err as string)
  }
}
