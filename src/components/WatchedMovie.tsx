import React from 'react'
import Watched from './Watched'
import { ITempWatchData } from '@/models/ITempMovieData'

type Props = {
  watched: ITempWatchData[]
  onDeleteWatched: (id: string) => void
}
const WatchedMovie = ({ watched, onDeleteWatched }: Props) => {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <Watched
          key={movie.Title}
          movie={movie}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  )
}

export default WatchedMovie
