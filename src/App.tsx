import Navbar from './components/Navbar'
import Main from './components/Main'
import { useState, useEffect, useCallback } from 'react'
import { ITempMovieData, ITempWatchData } from './models/ITempMovieData'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import Box from './components/ListBox'
import WatchedSummary from './components/WatchedSummary'
import WatchedMovie from './components/WatchedMovie'
import axios from 'axios'
import SelectedMovie from './components/SelectedMovie'

const KEY = '27509e64'

export default function App() {
  const [movies, setMovies] = useState<ITempMovieData[]>([])
  const [query, setQuery] = useState('inception')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setError] = useState('')
  const [selectedId, setSelectedId] = useState('')

  const handleSelectedMovie = (id: string) => {
    setSelectedId((prev) => (id === prev ? '' : id))
  }
  const handleCloseMovie = () => {
    setSelectedId('')
  }

  const handleAddWatched = (movieWatched: any) => {
    setWatched((prev) => [...prev, movieWatched])
  }

  const handleDeleteWatched = (id: string) => {
    setWatched((prev) => prev.filter((movie) => movie.imdbID !== id))
  }

  const [watched, setWatched] = useState<ITempWatchData[]>([])

  const fetchMovies = useCallback(async () => {
    // const controller = new AbortController()
    try {
      setIsLoading(true)
      const data = await axios.get(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
        {
          // signal: controller.signal,
        }
      )
      setMovies(data.data.Search)
      setIsLoading(false)
    } catch (error) {
      // console.log('error')
      setIsLoading(false)
      setError('Something went wrong')
    }

    // return () => {
    //   controller.abort()
    // }
  }, [query])
  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  // console.log(movies)
  return (
    <>
      {/* <StarRating /> */}
      <Navbar>
        <Logo />
        <SearchBar setQuery={setQuery} query={query} />
        <p className='num-results'>
          Found <strong>{movies?.length}</strong> results
        </p>
      </Navbar>

      <Main>
        <Box>
          {isLoading && <p className='loader'>Loading....</p>}
          {isError && <p className='loader'>Error....</p>}
          <MovieList movies={movies} onSelectMovie={handleSelectedMovie} />
        </Box>
        <Box>
          {selectedId && (
            <SelectedMovie
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          )}
          {!selectedId && (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovie
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  )
}
