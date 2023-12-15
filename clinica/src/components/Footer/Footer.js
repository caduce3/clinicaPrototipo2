'use client'
import React from 'react'
import './style.css';
import Image from 'next/image';

function Footer(props) {
  return (
    <section id="section-footer">
        <div>  
            <Image src={props.src1} alt='Logotipo Clínica Endos' width={400} height={380} id='logoendos' />
        </div>
        <div >
            <p >
                Acompanhe nossa rede social
            </p>
            <a href="https://www.instagram.com/endosnatal/" target='_blank'>
                <Image src={props.src2} alt='Logotipo Instagram' width={400} height={380} id='logoinsta' />
            </a>

        </div>
        <div>
            <p style={{marginBottom: "30px"}}>Faça seu agendamento:</p>
            <ul>
                <li>- (84) 3204-0819</li>
                <li>- Segunda à Sabado: 07h às 19h</li>
                <li>- Atendimentos de urgência 24 horas.</li>
            </ul>
        </div>
        
    </section>
    
  )
}

export default Footer;