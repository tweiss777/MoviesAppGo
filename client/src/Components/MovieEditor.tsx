import { useState } from "react"
import '../scss/MovieEditor.scss'
export default function MovieEditor() {

  const [title, setTitle] = useState<string>('')
  const [genre, setGenre] = useState<string>('')
  const [year,setYear] = useState<string>('') 
  
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
    </div>
  )
}