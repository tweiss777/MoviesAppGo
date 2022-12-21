/*
	File that holds the function to build routes


*/

package Routes

import (
	"fmt"
	Mc "restApi/Controllers"

	"github.com/gorilla/mux"
)

// helper function to define our routes in our rest api
// think of itb as if we are binding our functions to our routes
func BuildRoutes() *mux.Router {

	defer fmt.Println("Finished initiliazing routes. Go nuts!")
	var router *mux.Router = mux.NewRouter()
	movieRouter := router.PathPrefix("/v1/movies").Subrouter()
	movieRouter.HandleFunc("/welcome", Mc.Welcome)
	movieRouter.HandleFunc("/get-movies", Mc.GetMovieByGenre).Methods("GET").Queries("genre", "{genre}")
	movieRouter.HandleFunc("/get-movies", Mc.GetAllMovies).Methods("GET")
	movieRouter.HandleFunc("/movies/{id}", Mc.GetMovie).Methods("GET")
	movieRouter.HandleFunc("/add-movie", Mc.AddMovie).Methods("POST")
	movieRouter.HandleFunc("/delete-movie", Mc.DeleteMovie).Methods("DELETE")
	return movieRouter
}
