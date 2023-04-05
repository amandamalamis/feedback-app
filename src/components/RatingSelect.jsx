import React from 'react'
import { useState } from 'react'

function RatingSelect() {
    const [selected, setSelected] = useState(10)
    // the 10 here means that the 10 will be selected each time, automatically
    const handleChange = (3)
  return (
    <ul className='rating'>
    {Array.from({ length: 10 }, (_, i) => (
      <li key={`rating-${i + 1}`}>
        <input
          type='radio'
          id={`num${i + 1}`}
          name='rating'
          value={i + 1}
          onChange={handleChange}
          checked={selected === i + 1}
        />
        <label htmlFor={`num${i + 1}`}>{i + 1}</label>
      </li>
    ))}
  </ul>
  )
}

export default RatingSelect