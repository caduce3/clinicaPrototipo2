import React from 'react'
import './style.css';
import Image from 'next/image';

function CardQuadrado() {
  return (
    <>
        <div id="cardQuadrado">
            <Image src="/iconDoctorFemale.png" alt="Dois médicos sorrindo" width={100} height={100} />
            <h3>Lorem ipsum</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur.
            </p>
        </div>
    </>
  )
}

export default CardQuadrado;