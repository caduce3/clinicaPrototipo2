import React from 'react'
import Image from 'next/image';
import './style.css';

function CardImagem(props) {
  return (
    <div id='cardImagem'>
        <div id='div-card-imagem'>
            <Image src={props.src} alt={props.alt} width={250} height={366}/>
        </div>
        <div>
            <h4>{props.titulo}</h4>
            <p>{props.texto}</p>
        </div>
    </div>
  )
}

export default CardImagem;