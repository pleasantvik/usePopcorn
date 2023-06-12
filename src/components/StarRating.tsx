import Star from '@/reusable/Star'
import React, { useState } from 'react'

const starContainerStyle = {
  display: 'flex',
  gap: '4px',
}

type Props = {
  maxRating?: number
  color?: string
  size?: number
  onSetRating: (rating: number) => void
}
const StarRating = ({
  maxRating = 5,
  color = '#fcc419',
  size = 48,
  onSetRating,
}: Props) => {
  const [rating, setRating] = useState<number>(0)
  const [tempRating, setTempRating] = useState<number>(0)

  // const onUserRate =()=>{
  //   setUserRating()
  // }

  const handleRating = (rating: number) => {
    setRating(rating)
    onSetRating(rating)
  }

  const handleHover = (rating: number) => {
    setRating(rating)
  }

  const textStyle = {
    lineHeight: '1',
    margin: '0',
    color: color,
    fontSize: `${size / 1.5}px`,
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
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ''}</p>
    </div>
  )
}

export default StarRating
