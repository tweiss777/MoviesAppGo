package Data

/**
Represents user Data
*/
type User struct {
	FirstName string `json: "first_name"`
	LastName  string `json: "last_name"`
	UserName  string `json: "user_name"`
	Password  string `json: "password"`
}