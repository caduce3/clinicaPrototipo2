'use client'
import React from 'react'
import './style.css';
import Image from 'next/image';

function Equipe(props) {
  return (
    <section >
        <div id='section4-p2-main'>  
            <Image src={props.src} alt='equipe da clínica endos' width={1400} height={1380} id='equipe-endos' />
        </div>
        <div className='nossa-equipe' >
            <h2 className='text-white '>
                Nossa equipe
            </h2>
            <p >
                Temos em nosso corpo clínico Endoscopistas, Anestesistas e técnicos de enfermagem para podermos realizar todos os procedimentos com extrema competência e segurança. Antes de entrar na sala de endoscopia, nossos pacientes recebem todas as informações necessárias, conhecem o  endoscopista resposável pelo procedimento e fazem a sedação com um de nossos anestesistas!
            </p>
        </div>
    </section>
  )
}

export default Equipe;