export interface IMovie {
  id: number;
  movie_name: string;
  year: number;
  genre: string;
  
}

// movies mock
export const movies: IMovie[] = [
  {
		id: 1,
		movie_name:  "Transformers",
		genre: "Action",
		year:  2012,
	},
	{
		id: 2,
		movie_name:  "Scarface",
		genre: "Action",
		year:  1983,
	},
	{
		id: 3,
		movie_name:  "The Dictator",
		genre: "Comedy",
		year:  2012,
	},
]
