package main

import (
	"fmt"
	"log"
	"net/http"
	Router "restApi/Routes"
)

func main() {
	const PORT = 8080
	movieRouter := Router.BuildRoutes()

	// map route to prefix '/v1/movies' found in the moviesRouter
	http.Handle("/v1/movies/", movieRouter)

	fmt.Println(fmt.Sprintf("listening on port %d", PORT))
	log.Fatal(http.ListenAndServe(":8080", nil))
}
