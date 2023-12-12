import React from 'react'
import './style.css';

function CardQuadrado(props) {
  return (
    <>
        <div id="cardQuadrado">
            <div id="quadrado"></div>
            <h3>{props.subtitulo}</h3>
            <p>
                {props.texto}
            </p>
        </div>
    </>
  )
}

export default CardQuadrado;