import React from 'react'
import './Card.css'
import log from './weather.webp'
function Card({data}) {
    console.log(data)
  return (
    <div className='card' style={{
        display:data.display
    }}>
        <img src={log} alt='weather'></img>
        <h3>{data.name}</h3>
        <h3>{data.tempt}</h3>
        <p>Tempreture feels-like:   {data.temp_feels}</p>
        <p>Min Tempreture:    {data.temp_min}</p>
    </div>

  )
}

export default Card