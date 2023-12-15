
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { BsWhatsapp } from 'react-icons/bs';
import { Fragment, useRef, useState } from 'react';
import { Dialog } from '@headlessui/react';
import './style.css';


export default function index() {

  const [openOrientacoes, setOpenOrientacoes] = useState(false);
  const cancelButtonRefOrientacoes = useRef(null);

  // Função para abrir o modal
  const openModalOrientacoes = () => {
      setOpenOrientacoes(true);
  };

  // Função para fechar o modal
  const closeModalOrientacoes = () => {
      setOpenOrientacoes(false);
  };

  return (
    <Disclosure as="nav" className="bg-zinc-50 fixed z-10" id='disclosure'>
      {({ open }) => (
        <>
          <div className=" sm:px-6 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-verde-prototipo hover:bg-verde-prototipo hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-verde-prototipo">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div id='div-geral-links'>
                <div className="hidden sm:ml-6 sm:block" id='testea'>
                  <div className="links-menu">
                    <a href='#div-da-imagem' title='Início da página'>Início</a>
                  </div>
                  <div className="links-menu">
                    <a href='#section2-main-div-inicial' title='Parte dos Exames'>Exames</a>
                  </div>
                  <div className="links-menu" title='Mostrar Equipe'>
                    <a href='#equipe'>Equipe</a>
                  </div>
                  <div className="links-menu" title='Mostrar Unidades'>
                    <a href='#section4-main'>Unidades</a>
                  </div>
                  <div className="links-menu" title='Mostrar Orientações'>
                    <a style={{cursor: "pointer"}} onClick={openModalOrientacoes}>Orientações</a>
                  </div>
                  <a href="https://wa.me/5584981188466" title='Agendar consulta' target='_blank'> 
                    <button id='button-wpp'>
                      <BsWhatsapp color='#FFFFFF' className='icon-wpp'/>
                      <p>Agendar</p>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2" style={{display: "flex", flexDirection: "column"}}>
              
                <a
                  href= '#div-da-imagem' 
                  title= 'Mostrar Início da página'
                  className="links-mobile"
                  >
                  Início
                </a>

                <a
                  href= '#section2-main-div-inicial' 
                  title= 'Mostrar Exames'
                  
                  className="links-mobile"
                  >
                  Exames
                </a>

                <a
                  href= '#equipe' 
                  title= 'Mostrar equipe'
                  
                  className="links-mobile"
                  >
                  Equipe
                </a>

                <a
                  href= '#section5-main' 
                  title= 'Mostrar unidades'
                  
                  className="links-mobile"
                  >
                  Unidades
                </a>

                <a
                  style={{cursor: "pointer"}}
                  title='Mostrar Orientações'
                  onClick={openModalOrientacoes}
                  className="links-mobile"
                  >
                  Orientações
                </a>
              
            </div>
          </Disclosure.Panel>
          <section>
            <Transition.Root show={openOrientacoes} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={closeModalOrientacoes} initialFocus={cancelButtonRefOrientacoes}>
                <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                    </span>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                    <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white">
                          <div className="sm:flex sm:items-start  " style={{display: "flex", flexDirection: "column"}}>

                              <div style={{ padding: "25px"}}>
                                <div as="h3" className="subh3 ">
                                    <h3 style={{color: "#4D7473", fontFamily: "Poppins", fontSize: "24px", fontWeight:"700", textAlign:"left"}}>Agendamentos</h3>
                                </div>
                                <div className="subp" >
                                    <p style={{color: "#4D7473", fontFamily: "Poppins", fontSize: "18px", fontWeight:"300", textAlign:"justify", paddingTop: "10px"}}>
                                      Os agendamentos de exames podem ser feitos através do nosso contato de telefone ou via whatsapp. É necessário agendamento prévio e e encaminhamento com solicitação de exame. 
                                      <br></br> 
                                      Caso o paciente precise de uma endoscopia de urgência, ele pode vir diretamente a clínica, sem agendamento prévio e nossa equipe irá orientá-lo sobre os próximos passos!
                                    </p>
                                </div>
                              </div>

                              <div  style={{backgroundColor: "#86AE8E", padding: "25px"}}>
                                <div as="h3" className="subh3 mt-5">
                                    <h3  style={{color: "#FFFFFF", fontFamily: "Poppins", fontSize: "24px", fontWeight:"700", textAlign:"left"}}>Pré exame</h3>
                                </div>
                                <div className="subp" >
                                    <p style={{color: "#FFFFFF", fontFamily: "Poppins", fontSize: "18px", fontWeight:"300", textAlign:"justify", paddingTop: "10px"}}>
                                      É essencial que você esteja em Jejum, por pelo menos 08 horas antes de realizar o procedimento. Nesse jejum também será necessário incluir. <br></br> 

                                      Indicamos também que você venha realizar o exame com roupas soltas e confortáveis e vir com o mínimo possível de joias, já que você precisará retirá-las durante o exame!
                                    </p>
                                </div>
                              </div>

                              <div style={{ padding: "25px"}}>
                                <div as="h3" className="subh3 mt-5">
                                    <h3  style={{color: "#4D7473", fontFamily: "Poppins", fontSize: "24px", fontWeight:"700", textAlign:"left"}}>Acompanhantes</h3>
                                </div>
                                <div className="subp">
                                    <p style={{color: "#4D7473", fontFamily: "Poppins", fontSize: "18px", fontWeight:"300", textAlign:"justify", paddingTop: "10px"}}>
                                      Para realizar o exame de endoscopia é essencial que você venha com acompanhante, tendo em vista que você será sedado durante o procedimento e que para retornar para casa, precisará que algúem o acompanhe! Desta forma, é essencial que seu acompanhante não realize nenhum exame.
                                    </p>
                                </div>
                              </div>

                              <div style={{backgroundColor: "#86AE8E", padding: "25px"}}>
                                <div as="h3" className="subh3 mt-5">
                                    <h3  style={{color: "#FFFFFF", fontFamily: "Poppins", fontSize: "24px", fontWeight:"700", textAlign:"left"}}>Pós procedimento</h3>
                                </div>
                                <div className="subp">
                                    <p style={{color: "#FFFFFF", fontFamily: "Poppins", fontSize: "18px", fontWeight:"300", textAlign:"justify", paddingTop: "10px"}}>
                                      Após o procedimento, você passará um tempo em nossa sala de repouso para que possa se recuperar da sedação e que possamos observá-lo para liberá-lo com segurança para casa. Por isso orientamos que a marcação do exame ocorra em um dia em que você esteja mais tranquilo!
                                    </p>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        
                        <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={closeModalOrientacoes}
                            ref={cancelButtonRefOrientacoes}
                        >
                            Fechar
                        </button>
                        </div>
                    </div>
                    </Transition.Child>
                </div>
                </Dialog>
            </Transition.Root>
        </section>
        </>
      )}
    </Disclosure>
  )
};