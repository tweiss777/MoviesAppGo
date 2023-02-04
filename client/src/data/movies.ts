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
    console.log('movie to be added')
     const newMovie = movie //{
    //   "id": 11,
    //   "title": movie.title,
    //   "genre": movie.genre,
    //   "year": parseInt(movie.year)
    // }
    
    console.log(newMovie)
    const { data } = await axios.post('/v1/movies/add-movie',movie)
    return data 
  } catch(err){
    throw new Error(err as string)
  }
}
