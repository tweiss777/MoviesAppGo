package Data

import "errors"

/*
*
Represents user Data
*/
type User struct {
	FirstName string `json: "first_name"`
	LastName  string `json: "last_name"`
	UserName  string `json: "user_name"`
	Password  string `json: "password"`
}

// users list hardcoded for now
var users []User = []User{
	{
		FirstName: "Tal",
		LastName:  "Weiss",
		UserName:  "tweiss747@gmail.com",
		Password:  "abc123",
	},
	{
		FirstName: "Tal",
		LastName:  "Weiss",
		UserName:  "tweiss747@gmail.com",
		Password:  "abc123",
	},
}

func AddUser(newUser User) (bool, error) {
	notImplementedError := errors.New("Not implemented")
	return false, notImplementedError
}
