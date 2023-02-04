import { useState } from "react"
import '../scss/MovieEditor.scss'
import '../scss/AddMoviePage.scss'
import { IMovie } from "../data/IMovie"
interface IProps {
  title: string,
  genre: string,
  year: string,
  setTitle: Function,
  setGenre: Function,
  setYear: Function
  handleSubmit: Function
  submitText: string
}

export default function MovieEditor({title,genre,year, setTitle, setYear, setGenre, handleSubmit, submitText}: IProps) {

  function submitData(){
    const movie: IMovie = {
      id: Math.floor(Math.random() * 100000),
      title,
      genre,
      year: parseInt(year),

    }
    handleSubmit(movie)
  }

  return (
    <div className="movie-editor">
      <div className="form-row">
        <label>Movie Title</label>
        <input type="text" value={title} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)} />
      </div>
      <div className="form-row">
        <label>Genre</label>
        <input type="text" value={genre} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setGenre(event.target.value)} />
      </div>
      <div className="form-row">
        <label>Year</label>
        <input type="text" value={year} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setYear(event.target.value)} />
      </div>
      <div className="form-row">
        <button onClick={submitData} className="button-style">
          { submitText }
        </button>
      </div>
    </div>
  )
}