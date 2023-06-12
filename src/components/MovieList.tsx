import { ITempMovieData } from '@/models/ITempMovieData'
import Movie from './Movie'

type Props = {
  // movies: ITempMovieData[]
}
const MovieList = ({ movies, onSelectMovie }: any) => {
  // console.log(movies)
  return (
    <ul className='list list-movies'>
      {movies?.map((movie: any) => (
        <Movie
          key={Math.random()}
          movie={movie}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  )
}

export default MovieList
