'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CardCircle from '../CardCircle/CardCircle';
import CardQuadrado from '../CardQuadrado/CardQuadrado';
import './style.css';
import Modal from '../Modal/Modal';
import Equipe from '../Equipe/Equipe';
import Footer from '../Footer/Footer';

function Main() {
    
    const [windowWidth, setWindowWidth] = useState(0);

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
                    <CardCircle 
                        subtitulo1="Endoscopia diagnóstica" 
                        subtitulo2="e terapêutica" 
                        sub1="Endoscopia digestiva alta diagnóstica e terapêutica" 
                        sub2="Esse procedimento é frequentemente realizado para avaliar e diagnosticar condições relacionadas ao trato gastrointestinal, como o esôfago, estômago, intestino delgado e cólon. A endoscopia terapêutica é
                            uma alternativa menos invasiva à cirurgia tradicional, pois é realizada por meio de pequenas incisões ou aberturas naturais no corpo. 
                            Isso pode reduzir o risco, 
                            o tempo de recuperação e as complicações associadas aos procedimentos cirúrgicos."
                    />

                    <CardCircle 
                        subtitulo1="Colonoscopia diagnóstica" 
                        subtitulo2="e terapêutica"texto="saiba mais sobre o exame"
                        sub1="Colonoscopia diagnóstica e terapêutica" 
                        sub2="Utiliza-se  um tubo flexível com uma câmera para examinar o cólon e o reto, buscando sintomas gastrointestinais ou rastreando condições como o câncer colorretal.
                        Na terpaeutica, além da visualização, o médico pode realizar intervenções como a remoção de pólipos, controle de sangramentos ou dilatação de áreas estreitas no cólon. É uma extensão da colonoscopia diagnóstica, oferecendo a capacidade de tratar e corrigir problemas identificados durante o exame."
                    />
                </div>
                <div style={{display: 'flex'}}>
                    <CardCircle 
                        subtitulo1="Polipectomia" 
                        subtitulo2=""
                        texto="saiba mais sobre o exame"
                        sub1="Polipectomia" 
                        sub2="A polipectomia é um procedimento realizado 
                        durante uma colonoscopia para remover pólipos do cólon ou do reto. Os pólipos são crescimentos anormais que se desenvolvem na parede interna do intestino."
                    />
                    <CardCircle 
                        subtitulo1="Retossigmoidoscopia" 
                        subtitulo2=""
                        texto="saiba mais sobre o exame"
                        sub1="Retossigmoidoscopia"
                        sub2="A retossigmoidoscopia é um procedimento
                        médico que utiliza um instrumento chamado 
                       retossigmoidoscópio para visualizar o reto e a 
                       porção inferior do cólon, conhecida como sigmoide."
                    />
                </div>
                <div style={{display: 'flex',}}>
                    <CardCircle 
                        subtitulo1="Cápsula endoscópica" 
                        subtitulo2=""
                        texto="saiba mais sobre o exame"
                        sub1="Cápsula endoscópica"
                        sub2="É um pequeno dispositivo em 
                        forma de cápsula que contém 
                        uma câmera miniaturizada. 
                        Ingerida pelo paciente, ela 
                        percorre o trato digestivo, 
                        transmitindo imagens para 
                        um gravador externo. 
                        Essa tecnologia sem fio oferece 
                        uma visão detalhada do intestino
                         delgado, auxiliando no 
                        diagnóstico de condições 
                        gastrointestinais sem a
                         necessidade de procedimentos 
                        invasivos."
                    />
                    <CardCircle 
                        subtitulo1="Ligadura elástica" 
                        subtitulo2=""
                        texto="saiba mais sobre o exame"
                        sub1="Ligadura elástica"
                        sub2="A ligadura elástica no esôfago é um procedimento endoscópico 
                        utilizado para tratar varizes 
                        esofágicas. Bandas elásticas são aplicadas nas varizes para interromper o sangramento e prevenir complicações associadas a condições como
                         a hipertensão portal."
                    />
                </div>
            </div>
        </section>

        <section  id='section3-main'>
            <div style={{display: 'flex', paddingTop: "8%"}} id='cardQuadrado-secao3'>
                <CardQuadrado subtitulo="Segurança" texto="Estamos localizados dentro de dois hospitais referências em Natal"/>
                <CardQuadrado subtitulo="Conforto" texto="Nossos pacientes realizam o exame sedados, sem sentir nenhum desconforto"/>
                <CardQuadrado subtitulo="Equipe" texto="Equipe multidisciplinar com profissionais extremamente competentes"/>
                <CardQuadrado subtitulo="Equipamentos" texto="Temos equipamentos de ponta para fazer diagnósticos consistentes e assertivos"/>
            </div>
            <div id='section3-p2-main' >
                <h2 className='text-white mt-10 mb-5'>
                    Conheça os quatro princípios  <br/>
                    norteadores da Endos
                </h2>
                <p className='text-white text-xl text-justify' id='paragrafo-section3-main'>
                    Há mais de dez anos realizando procedimentos endoscópicos buscamos proporcionar a nossos pacientes segurança, por termos não só uma equipe competente como também, estarmos localizados dentro de dois hopsitais referências em Natal, a Promater e a Casa de Saúde São Lucas. Por termos essa retaguarda, também podemos proporcionar mais conforto a nossos pacientes tendo em vista a proximidade com atendimentos de urgência e demais profissionais especializados. Nossa equipe multidisciplinar que engloba endoscopistas, anestesistas e técnicos de enfermaegm, juntamente com nossos recepcionistas prezam por um atendimento respeitoso e humanizado, levando sempre em consideração que os pacientes estão em jejum e precisam ter o atedimento na hora marcada e com maior acolhimento possivel. Por fim, gostaráimos de destacar nossa preocupação pela busca de equipamentos seguros e validados pelos Conselhos para trazer diagnósticos cada vez mais precisos.
                </p>
            </div>
        </section>

        <div>
            <Equipe src='/equipe.jpg'/>
        </div>

        <section id='section5-main' style={{ display: 'flex', alignItems: 'center', }}>
            <div>
                <Image src='/clinicaDentro.png' alt='Parte interna clínica endos unicade promater' width={730} height={1080}/>
            </div>
            <div id='section5-p2-main' style={{ paddingLeft: '5vw', paddingRight: '5vw' }}>
                <h2>
                    Clinica Endos <br/>
                    Unidade Promater
                </h2>
                <p>
                    Agende seu exame na nossa unidade no hospital da Promater. Nossa clínica fica localizada no primeiro andar a direita da escada principal! <br></br>
                    Contamos com uma recepção própria e uma sala de espera para pacientes e acompanhantes
                </p>
            </div>
        </section>
        <section id='section4-main'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15876.908253750233!2d-35.2165138!3d-5.8235721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2fff606639cc7%3A0x669e23c1a8eb7d32!
                2sCl%C3%ADnica%20Endos%2C%20endoscopia%20diagn%C3%B3stica%20e%20terap%C3%AAutica%20%7C%20Unidade%20Promater!5e0!3m2!1spt-BR!2sbr!4v1701459404596!5m2!1spt-BR!2sbr" width=
                "600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{borderRadius: "10px"}}>

            </iframe>
        </section>
        <section id='section5-main' style={{ display: 'flex', alignItems: 'center', }}>
            
            <div id='section5-p2-main' style={{ paddingLeft: '5vw', paddingRight: '5vw' }}>
                <h2>
                    Clinica Endos <br/>
                    Unidade Casa de Saúde são Lucas
                </h2>
                <p>
                    Agende seu exame na nossa unidade no hospital da Promater. Nossa clínica fica localizada no primeiro andar a direita da escada principal! <br></br>
                    Contamos com uma recepção própria e uma sala de espera para pacientes e acompanhantes
                </p>
            </div>
            <div>
                <Image src='/clinicaDentro2.jpg' alt='Parte interna clínica endos são lucas' width={730} height={1080}/>
            </div>
        </section>
        <section id='section4-main'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15877.749785578326!2d-35.1999271!3d-5.7937202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b301f4aaf73f2f%3A0xa296e6bb9b66300f!2sCl%C3%ADnica%20Endos%2C%20endoscopia%20%7 C%20Unidade%20Casa%20de%20sa%C3%BAde%20S%C3%A3o%20Lucas!5e0!3m2!1spt-BR!2sbr!4v1701460047377!5m2!1spt-BR!2sbr" width=
                "600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{borderRadius: "10px"}}>

            </iframe>
        </section>
        <section>
            <Footer src1='/logoEndos.jpg' src2='/logoInsta.jpg'/>
            <p id='p-footer'>
                @2023- Todos os direitos Reservados a Clínica Endos - Desenvolvido por Synapsis Marketing Médico
            </p>
        </section>
    </main>

    
  )
}

export default Main;