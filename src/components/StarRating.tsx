import Star from '@/reusable/Star'
import React, { useState } from 'react'

const starContainerStyle = {
  display: 'flex',
  gap: '4px',
}

const textStyle = {
  lineHeight: '1',
  margin: '0',
}
type Props = {
  maxRating?: number
}
const StarRating = ({ maxRating = 5 }: Props) => {
  const [rating, setRating] = useState<number>(0)
  const [tempRating, setTempRating] = useState<number>(0)

  const handleRating = (rating: number) => {
    setRating(rating)
  }

  const handleHover = (rating: number) => {
    setRating(rating)
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => handleHover(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ''}</p>
    </div>
  )
}

export default StarRating
