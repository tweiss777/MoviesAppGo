import MovieItem from '../Components/MovieItem'
import { getMovies } from '../data/movies' 
import { useState, useEffect } from 'react'
import { IMovie } from '../data/IMovie'
import CustomSpinner from '../Components/CustomSpinner/CustomSpinner'
import { Link } from 'react-router-dom'
import '../scss/Dashboard.scss'

export default function DashBoard(){
  
  const [movies, setMovies] = useState<IMovie[]>([])
  const [fetchError,setFetchError] = useState<boolean>(false)
  const [fetching, setFetching] = useState<boolean>(false)
  
  useEffect(() => {
    const fetchMovies = async () => {
      try{
        setFetching(true)
        const movies: IMovie[] = await getMovies()
        setMovies(movies)
      } catch(err){
        setFetchError(true)
      } finally{
        setTimeout(() => setFetching(false),2000)
      }
    }
     fetchMovies()
  },[])

  const movieComponents: JSX.Element [] = movies.map(movie => <MovieItem key={movie.id} id={movie.id} movie_name={movie.movie_name} year={movie.year} genre={movie.genre} />)

  return (
    <div className='dashboard-container'>
      <h1>Movies List</h1>
      
      {fetching && 
      <div>
        <CustomSpinner /><span>Fetching movies...</span>
      </div>  
      }
      <div>
        {!fetchError? movieComponents.length > 0?
        <>
          <Link to='/add-movie'>
        <button className={"button-style"}>+ Add Movie</button>
      </Link>

          {movieComponents}
        </> : 
        'No Movies' 
            : 
        <p style={{color: '#ff0000'}}>Error Fetching movies 😥</p> }
      </div>
    </div>
  )
}
