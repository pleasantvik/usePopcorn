import { ITempWatchData } from '@/models/ITempMovieData'
// import { tempWatchedData } from '@/models/tempMovieData'
import React from 'react'

type Props = {
  watched: ITempWatchData[]
}
const WatchedSummary = ({ watched }: Props) => {
  const average = (arr: any) =>
    arr.reduce(
      (acc: any, cur: any, i: any, arr: any) => acc + cur / arr.length,
      0
    )
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating))
  const avgUserRating = average(watched.map((movie) => movie.userRating))
  const avgRuntime = average(watched.map((movie) => movie.runtime))
  return (
    <div className='summary'>
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  )
}

export default WatchedSummary
