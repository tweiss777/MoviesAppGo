import { useState } from "react"

export default function MovieEditor(){
  
  const [title, setTitle] = useState<string>('')

  return(
    <div>
      <label>Movie Title</label>
      <input type="text" value={title} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)} />
    </div>
  )
}