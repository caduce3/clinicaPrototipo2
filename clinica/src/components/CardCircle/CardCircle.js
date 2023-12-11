import React from 'react'
import './style.css';

function CardCircle(props) {
  return (
    <>
      <div id='cardCricle'>
        <div id='circle'> </div>
        <h3>{props.subtitulo1} <br></br>
        {props.subtitulo2}
        </h3>
        <p>
          {props.texto}
        </p>
      </div>
    </>
  )
}

export default CardCircle