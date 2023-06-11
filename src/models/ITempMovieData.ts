export interface ITempMovieData {
  imdbID: string
  Title: string
  Year: string
  Poster: string
}

export interface ITempWatchData extends ITempMovieData {
  runtime: number
  imdbRating: number
  userRating: number
}
