import { useState } from "react"
import '../scss/MovieEditor.scss'

interface IProps {
  title: string,
  genre: string,
  year: number,
  setTitle: Function,
  setGenre: Function,
  setYear: Function
  handleSubmit: Function
}

export default function MovieEditor({title,genre,year, setTitle, setYear, setGenre, handleSubmit}: IProps) {

  function submitData(){
    handleSubmit()
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
        <button class
      </div>
    </div>
  )
}