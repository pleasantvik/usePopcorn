import { useState } from 'react'
import { ITempMovieData } from '@/models/ITempMovieData'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
const Box = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='box'>
      <button className='btn-toggle' onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && <>{children}</>}
    </div>
  )
}

export default Box
