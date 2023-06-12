export interface ITempMovieData {
  imdbID: string
  Title: string
  Year: string
  Poster: string
  Type?: string
}

export interface ITempWatchData extends ITempMovieData {
  runtime: number
  imdbRating: number
  userRating: number
}
