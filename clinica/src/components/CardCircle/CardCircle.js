import React from 'react'
import './style.css';
import Modal from '../Modal/Modal';
import { useState } from 'react';

function CardCircle(props ) {
  
  return (
    <>
      <div id='cardCricle' >
        <div id='circle'> </div>
        <h3>{props.subtitulo1} <br></br>
        {props.subtitulo2}
        </h3>
        <div>
          <Modal subtitulo={props.sub1} texto={props.sub2} />
        </div>
      </div>
    </>
  )
}

export default CardCircle