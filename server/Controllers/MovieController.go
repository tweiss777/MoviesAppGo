package Controllers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	MovieData "restApi/Data"
	"strconv"

	"github.com/gorilla/mux"
)

// here we pass in an http response writer and an http reader type
// and if you think about it like in express js w is response and r is reqeut
func Welcome(w http.ResponseWriter, r *http.Request) {
	fmt.Println("endpoint triggered")
	fmt.Fprintf(w, "welcome to go rest apis")
}

func GetAllMovies(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Getting all movies")
	movies := MovieData.GetAllMovies()

	// how responses are returned
	json.NewEncoder(w).Encode(movies)
}

func GetMovie(w http.ResponseWriter, req *http.Request) {
	params := mux.Vars(req)
	param, err := strconv.Atoi(params["id"])
	if err != nil {
		json.NewEncoder(w).Encode("Invalid parameter")
		return
	}
	movie, movieError := MovieData.GetMovie(param)
	if movieError != nil {
		json.NewEncoder(w).Encode("Invalid movie id")
		return
	}
	json.NewEncoder(w).Encode(movie)
	return

}

func AddMovie(writer http.ResponseWriter, req *http.Request) {
	fmt.Println("Inserting movie")
	// post request is being read and is parsed in the proper format
	requestBody, err := ioutil.ReadAll(req.Body)
	if err == nil {
		var newMovie MovieData.Movie
		json.Unmarshal(requestBody, &newMovie)
		result := MovieData.InsertMovie(newMovie)
		json.NewEncoder(writer).Encode(result)
		return
	} else {
		fmt.Fprint(writer, "Something went wrong while trying to add a movie")
	}

}

// this route gets movie by category
func GetMovieByGenre(res http.ResponseWriter, req *http.Request) {
	genre := req.URL.Query().Get("genre")
	if len(genre) > 1 || genre != "" {
		var movies *[]MovieData.Movie = MovieData.GetAllMovies()
		var moviesByCategory []MovieData.Movie
		for _, movie := range *movies {
			if movie.Genre == genre {
				moviesByCategory = append(moviesByCategory, movie)
			}
		}
		if len(moviesByCategory) < 1 {
			fmt.Fprintln(res, "No movies associated with that genre")
			return
		}
		json.NewEncoder(res).Encode(moviesByCategory)
		return
	}
	fmt.Fprintln(res, "No Genre supplied")

}

func DeleteMovie(res http.ResponseWriter, req *http.Request) {
	movieId := req.URL.Query().Get("movie_id")
	// take the id of the movie you want to delete and pass it here below
	id, err := strconv.Atoi(movieId)
	if err != nil {
		fmt.Fprintln(res, "Something went wrong while deleting movie")
		return
	}
	deletedMovie := MovieData.DeleteMovieById(id)
	json.NewEncoder(res).Encode(deletedMovie)
	return
}
