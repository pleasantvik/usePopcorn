import React from 'react'
import Watched from './Watched'
import { ITempWatchData } from '@/models/ITempMovieData'

type Props = {
  watched: ITempWatchData[]
}
const WatchedMovie = ({ watched }: Props) => {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <Watched key={movie.Title} movie={movie} />
      ))}
    </ul>
  )
}

export default WatchedMovie
