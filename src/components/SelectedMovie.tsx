import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import StarRating from './StarRating'
import { ITempWatchData } from '@/models/ITempMovieData'

type Props = {
  selectedId: string
  onCloseMovie: () => void
  onAddWatched: (movie: any) => void
  watched: ITempWatchData[]
}
const KEY = '27509e64'

interface IMovie {
  Title?: string
  Year?: string
  Poster?: string
  Runtime?: string
  Plot?: string
  Released?: string
  Actors?: string
  Director?: string
  Genre?: string
  imdbRating?: string
}
const SelectedMovie = ({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}: Props) => {
  const [movie, setMovie] = useState<IMovie>({})
  const [isLoading, setIsLoading] = useState(false)
  const [userRating, setUserRating] = useState(0)

  const isWatched = watched
    .map((movie: ITempWatchData) => movie.imdbID)
    .includes(selectedId)

  const watchedRating = watched.find(
    (movie: ITempWatchData) => movie.imdbID === selectedId
  )?.userRating

  const getMovieDetails = useCallback(async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      )

      setMovie(data)
      setIsLoading(false)
    } catch (error) {}
  }, [selectedId])

  useEffect(() => {
    getMovieDetails()
  }, [getMovieDetails])

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
    imdbRating,
  }: IMovie = movie

  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: runtime?.split(' ').at(0),
      userRating,
    }
    onAddWatched(newWatchedMovie)
    onCloseMovie()
  }

  useEffect(() => {
    document.title = `Movie | ${title}`

    return () => {
      document.title = 'usePopcorn'
    }
  }, [title])

  if (isLoading) {
    return <p className='loader'>Loading....</p>
  }

  return (
    <div className='details'>
      <header>
        <button className='btn-back' onClick={onCloseMovie}>
          &larr;
        </button>
        <img src={poster} alt={poster} />
        <div className='details-overview'>
          <h2>{title}</h2>
          <p>
            {released} &bull; {runtime}
          </p>
          <p>{genre}</p>
          <p>
            <span>⭐</span>
            {imdbRating} IMDb rating
          </p>
        </div>
      </header>
      <section>
        <div className='rating'>
          {!isWatched && (
            <>
              <StarRating
                maxRating={10}
                size={24}
                onSetRating={setUserRating}
              />
              {userRating && (
                <button className='btn-add' onClick={handleAdd}>
                  Add to list
                </button>
              )}
            </>
          )}

          {isWatched && <p>You already rated the movie {watchedRating} </p>}
        </div>
        <p>
          <em>{plot}</em>
          <p>Starring {actors}</p>
          <p>Directed by {director}</p>
          <p>Year {year}</p>
        </p>
      </section>
    </div>
  )
}

export default SelectedMovie
