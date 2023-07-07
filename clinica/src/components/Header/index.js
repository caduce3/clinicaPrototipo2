'use client'
import React from 'react'
import Navbar from '../Navbar'
import Image from 'next/image';
import './style.css';

function index() {
  return (
    <header>
        <Navbar />
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
                <Image src="/doutores.svg" alt="Example Image" layout="fill" objectFit="cover" />
            </div>
            <div style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)', padding: '2rem' }}>
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
        </div>
    </header>
  )
}

export default index