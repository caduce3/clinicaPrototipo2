import React from 'react'
import Image from 'next/image';
import CardCircle from '../CardCircle/CardCircle';
import './style.css';

function index() {
  return (
    <main>
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
            <div id='section2-main-div-inicial' style={{ position: 'absolute', top: '195%',  left: '10%',  transform: 'translateY(-50%)' }}>
                <h2>
                    Lorem ipsum dolor sit <br/>
                    amet consectetur.
                </h2>
                <p>
                    Lorem ipsum dolor sit amet <br/> consectetur. Dui ultricies iaculis et <br/> morbi. Fringilla cursus scelerisque <br/> vestibulum facilisi blandit rutrum. <br/> Mauris etiam amet amet
                </p>
            </div>
            <div style={{ position: 'absolute', top: '200%', left: '54%', transform: 'translateY(-50%)', }}>
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
    </main>
  )
}

export default index;