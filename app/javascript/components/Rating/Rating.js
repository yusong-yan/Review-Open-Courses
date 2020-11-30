import React from 'react'
import './Rating.css'

const Rating = (props) => {
  const score = (props.score / 5) * 100

  return (
    <div>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
        <span className="star-wrapper">
            <span className="stars" style={{ width: score + "%" }}></span>
        </span>
    </div>
  )
}

export default Rating