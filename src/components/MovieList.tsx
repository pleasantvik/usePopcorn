import { ITempMovieData } from '@/models/ITempMovieData'
import Movie from './Movie'

type Props = {
  movies: ITempMovieData[]
}
const MovieList = ({ movies }: Props) => {
  return (
    <ul className='list'>
      {movies?.map((movie: ITempMovieData) => (
        <Movie key={movie.Title} movie={movie} />
      ))}
    </ul>
  )
}

export default MovieList
