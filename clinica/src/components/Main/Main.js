'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CardCircle from '../CardCircle/CardCircle';
import CardQuadrado from '../CardQuadrado/CardQuadrado';
import './style.css';

function Main() {

  return (
    <main className="w-full z-10">
        <section style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <div style={{ width: '100%', height: '140%', position: 'absolute', top: 0, left: 0 }}>
                <Image src="/doutores.png" alt="Dois médicos sorrindo" layout="fill" objectFit="cover" />
            </div>
            <div style={{ position: 'absolute', top: '70%', left: '8%', transform: 'translateY(-50%)', padding: '2rem' }}>
                <section id="secao1-inicial">
                <h1>
                    Lorem ipsum <br />
                    dolor sit amet <br />
                    consectetur. <br />
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Tortor justo diam enim nibh. Tristique nunc quam quam massa. In leo
                    magnis viverra ullamcorper tincidunt suscipit tellus hac.
                </p>
                <button>Lorem ipsum dolor</button>
                </section>
            </div>
        </section>

        <section  style={{ marginTop: '30vh', }} id='section2-main'>
            <div id='section2-main-div-inicial' >
                <h2>
                    Lorem ipsum dolor sit <br/>
                    amet consectetur.
                </h2>
                <p>
                    Lorem ipsum dolor sit amet <br/> consectetur. Dui ultricies iaculis et <br/> morbi. Fringilla cursus scelerisque <br/> vestibulum facilisi blandit rutrum. <br/> Mauris etiam amet amet
                </p>
            </div>
            <div id='div-cardsCircles'>
                <div style={{display: 'flex'}}>
                    <CardCircle />
                    <CardCircle />
                </div>
                <div style={{display: 'flex'}}>
                    <CardCircle />
                    <CardCircle />
                </div>
                <div style={{display: 'flex',}}>
                    <CardCircle />
                    <CardCircle />
                </div>
            </div>
        </section>

        <section  id='section3-main' >
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
    </main>
  )
}

export default Main;