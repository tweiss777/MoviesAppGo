import { Link } from "react-router-dom";
import MovieEditor from "../Components/MovieEditor";
import '../scss/AddMoviePage.scss';
import { useState, useEffect } from 'react'
import { IMovie } from "../data/IMovie";
import { addMovie } from '../data/movies'
export default function AddMovie() {
  const [title,setTitle] = useState<string>("")
  const [genre, setGenre] = useState<string>("")
  const [year, setYear] = useState<string>("")
  
  const [errorExists,setErrorExists] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<boolean>(false)
  
  useEffect(() =>{
    setError('Test Error Message')
    setSuccess(true)
  })

  function submitMovie(movie: IMovie){
    setSuccess(false) 
    setError('')
    setErrorExists(false)
    try{
      const response = addMovie(movie)
      console.log(response)
      setSuccess(true)     
    } catch(err){
      setErrorExists(true)
      setError(err as string)
    }
  }


  return (
    <div className="add-movie">
      <p></p>
      <p></p>
      <Link to="/dashboard">
        <button className="button-style">
          Back
        </button>
      </Link>
      <MovieEditor
        title={title}
        genre={genre}
        year={year}
        setTitle={setTitle}
        setGenre={setGenre}
        setYear={setYear}
        handleSubmit={submitMovie}
        submitText='Add movie'
      />
    </div>
  )
}