import { Link } from "react-router-dom";
import MovieEditor from "../Components/MovieEditor";
import '../scss/AddMoviePage.scss';
export default function AddMovie() {


  return (
    <div className="add-movie">
      <Link to="/dashboard">
        <button className="button-style">
          Back
        </button>
      </Link>
      <MovieEditor
        title={""}
        genre={""}
        year={0}
        setTitle={undefined}
        setGenre={undefined}
        setYear={undefined}
        handleSubmit={undefined}
      />
      <button className="button-style">
        Add Movie
      </button>
    </div>
  )
}