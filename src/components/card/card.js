import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom'
function Card() {
  return (
    <div className='SimpleCard'>
      <img src='https://images.pexels.com/photos/15789054/pexels-photo-15789054/free-photo-of-city-cars-road-traffic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='cardImage'/>
    </div>
  )
}

export default Card
