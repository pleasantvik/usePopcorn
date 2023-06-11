import { useState } from 'react'
import WatchedSummary from './WatchedSummary'
import WatchedMovie from './WatchedMovie'
import { ITempWatchData } from '@/models/ITempMovieData'

type Props = {
  watched: ITempWatchData[]
}
const WatchedBox = ({ watched }: Props) => {
  const [isOpen2, setIsOpen2] = useState(true)

  return (
    <div className='box'>
      <button
        className='btn-toggle'
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? '–' : '+'}
      </button>
      {isOpen2 && <></>}
    </div>
  )
}

export default WatchedBox
