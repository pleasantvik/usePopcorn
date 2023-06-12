// import React, { useState } from 'react'

type Props = {
  setQuery: any
  query: string
}
const SearchBar = ({ setQuery, query }: Props) => {
  // const [query, setQuery] = useState('')

  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}

export default SearchBar
