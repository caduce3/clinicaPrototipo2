'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CardCircle from '../CardCircle/CardCircle';
import CardQuadrado from '../CardQuadrado/CardQuadrado';
import CardImagem from '../CardImagem/CardImagem';
import './style.css';

function Main() {

    const [windowWidth, setWindowWidth] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', text: '' });

    useEffect(() => {
        if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
        }

        const handleResize = () => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
        }
        };

        if (typeof window !== 'undefined') {
        window.addEventListener('resize', handleResize);
        }

        return () => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', handleResize);
        }
        };
    }, []);

  return (
    <main>
        <section style={{ position: 'relative', height: '100vh' }}>
            <div id='div-da-imagem'>
                <Image src="/doutores.png" alt="Dois médicos sorrindo" layout="fill" objectFit="cover" />
            </div>
            <div style={{ position: 'absolute', top: '70%', left: '8%', transform: 'translateY(-50%)', padding: windowWidth >= 560 ? '2rem' : '0' }}>
                <section id="secao1-inicial">
                    <h1>
                        Agende seu exame <br />
                        na clínica <br />
                        Endos <br />
                    </h1>
                    <p>
                        Há mais de dez anos realizando exames de endoscopia e colonoscopia diagnóstica e terapêutica em ambiente hospitalar. Não deixe de entrar em contato conosco para tirar suas dúvidas
                    </p>
                    <button><a href="https://wa.me/5584981188466">Entrar em contato</a></button>
                </section>
            </div>
        </section>

        <section   id='section2-main'>
            <div id='section2-main-div-inicial' >
                <h2>
                    Saiba quais <br/>
                    exames podem <br/>
                    ser  realizados
                </h2>
                <p>
                    Esses exames podem ser agendos em nossa  Unidade em Lagoa Nova, na <strong>Promater</strong> e no Tirol, na <strong>Casa de Saúde São Lucas.</strong>
                </p>
            </div>
            <div id='div-cardsCircles'>
                <div style={{display: 'flex'}}>
                    <CardCircle subtitulo1="Endoscopia diagnóstica" subtitulo2="e terapêutica"texto="Clique e saiba mais sobre o exame"/>
                    <CardCircle subtitulo1="Colonoscopia diagnóstica" subtitulo2="e terapêutica"texto="Clique e saiba mais sobre o exame"/>
                </div>
                <div style={{display: 'flex'}}>
                    <CardCircle subtitulo1="Polipectomia" subtitulo2=""texto="Clique e saiba mais sobre o exame"/>
                    <CardCircle subtitulo1="Retossigmoidoscopia" subtitulo2=""texto="Clique e saiba mais sobre o exame"/>
                </div>
                <div style={{display: 'flex',}}>
                    <CardCircle subtitulo1="Cápsula endoscópica" subtitulo2=""texto="Clique e saiba mais sobre o exame"/>
                    <CardCircle subtitulo1="Ligadura elástica" subtitulo2=""texto="Clique e saiba mais sobre o exame"/>
                </div>
            </div>
        </section>

        <section  id='section3-main'>
            <div style={{display: 'flex', paddingTop: "8%"}} id='cardQuadrado-secao3'>
                <CardQuadrado />
                <CardQuadrado />
                <CardQuadrado />
            </div>
            <div id='section3-p2-main' >
                <h2 className='text-white mt-10 mb-5'>
                    Lorem ipsum dolor sit <br/>
                    amet consectetur.
                </h2>
                <p className='text-white text-xl text-justify' id='paragrafo-section3-main'>
                    Lorem ipsum dolor sit amet consectetur. Dui ac lacus risus elit tellus integer placerat massa. Velit felis suscipit ut sit. Faucibus amet eros cursus lectus nibh pellentesque ac euismod. Nulla nisl sapien sit pellentesque lorem tortor cursus vitae dolor. Dolor eu aliquam mattis scelerisque vivamus suscipit magna orci adipiscing. Id et imperdiet turpis vel ac massa lorem et et. Pellentesque tellus nisl tincidunt nisl bibendum pretium vitae egestas. Ipsum condimentum et purus faucibus quam lorem condimentum morbi. Sit facilisi in vulputate arcu. Suscipit curabitur tellus ac et orci lorem nunc. Purus pharetra eleifend tristique ornare. Suspendisse sed eu est sit vitae non. Sed imperdiet in tortor ullamcorper. Eget a ac nulla auctor nibh egestas. Cursus quis mi massa ultricies volutpat dolor suspendisse lacus tempus. Arcu dolor morbi quis aliquet vestibulum. Fermentum sem volutpat sed fringilla.
                </p>
            </div>
        </section>

        <section id='section4-main'>
            <h2 className='text-white '>
                    Lorem ipsum dolor sit <br/>
                    amet consectetur.
            </h2>
            <div style={{display: 'flex', }} id='section4-p2-main'>  
                <CardImagem src='/dt1.png' alt='Médico 1' titulo='Lorem ipsum' texto='Lorem ipsum dolor'/>
                <CardImagem src='/dt2.png' alt='Médico 2' titulo='Lorem ipsum' texto='Lorem ipsum dolor'/>
                <CardImagem src='/dt3.png' alt='Médico 3' titulo='Lorem ipsum' texto='Lorem ipsum dolor'/>
                <CardImagem src='/dt4.png' alt='Médico 4' titulo='Lorem ipsum' texto='Lorem ipsum dolor'/>
            </div>
        </section>

        <section id='section5-main' style={{ display: 'flex', alignItems: 'center', }}>
            <div>
                <Image src='/clinicaDentro.png' alt='Doutores' width={730} height={1080}/>
            </div>
            <div id='section5-p2-main' style={{ paddingLeft: '5vw', paddingRight: '5vw' }}>
                <h2>
                    Lorem ipsum dolor sit <br/>
                    amet consectetur.
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Dui ultricies iaculis et morbi. Fringilla cursus scelerisque vestibulum facilisi blandit rutrum. Mauris etiam amet amet 
                </p>
            </div>
        </section>
    </main>
  )
}

export default Main;