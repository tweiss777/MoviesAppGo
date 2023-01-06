package Data

import (
	"errors"
	"fmt"
)

type Movie struct {
	Id    int    `json:"id"`
	Name  string `json:"movie_name"`
	Year  int    `json:"year"`
	Genre string `json:"genre"`
}

// mock data that we will use to fetch movies
// soon we will replace this with an actual database
var movies []Movie = []Movie{
	{
		Id:    1,
		Name:  "Transformers",
		Genre: "Action",
		Year:  2012,
	},
	{
		Id:    2,
		Name:  "Scarface",
		Genre: "Action",
		Year:  1983,
	},
	{
		Id:    3,
		Name:  "The Dictator",
		Genre: "Comedy",
		Year:  2012,
	},
}

// gets all movies from the list
func GetAllMovies() *[]Movie {
	return &movies
}

// gets movie by id
func GetMovie(id int) (Movie, error) {
	for _, movie := range movies {
		if movie.Id == id {
			return movie, nil
		}
	}
	return Movie{}, errors.New("movie is not found")
}

func InsertMovie(movie Movie) Movie {
	movies = append(movies, movie)
	fmt.Println("movies")
	fmt.Println(movies)
	return movie
}

// function is throwing issues
func DeleteMovieById(movieId int) Movie {
	var movieToDelete Movie
	for i, movie := range movies {
		if movieId == movie.Id {
			movieToDelete = movie
			copy(movies[i:], movies[:i+1])
			movies[len(movies)-1] = Movie{}
			movies = movies[:len(movies)-1]
		}

	}

	return movieToDelete
}
