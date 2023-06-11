import Navbar from './components/Navbar'
import Main from './components/Main'
import { tempMovieData, tempWatchedData } from './models/tempMovieData'
import { useState } from 'react'
import { ITempMovieData, ITempWatchData } from './models/ITempMovieData'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import Box from './components/ListBox'
import WatchedSummary from './components/WatchedSummary'
import WatchedMovie from './components/WatchedMovie'
import StarRating from './components/StarRating'

export default function App() {
  const [movies, setMovies] = useState<ITempMovieData[]>(tempMovieData)
  const [watched, setWatched] = useState<ITempWatchData[]>(tempWatchedData)

  return (
    <>
      <StarRating />
      <Navbar>
        <Logo />
        <SearchBar />
        <p className='num-results'>
          Found <strong>{movies.length}</strong> results
        </p>
      </Navbar>

      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovie watched={watched} />
        </Box>
      </Main>
    </>
  )
}
