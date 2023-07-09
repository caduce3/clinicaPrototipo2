
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { BsWhatsapp } from 'react-icons/bs';
import './style.css';


const navigation = [
  { name: 'Início', href: '#', current: false },
  { name: 'Serviços', href: '#', current: false },
  { name: 'Clínica', href: '#', current: false },
  { name: 'Exames', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function index() {
  return (
    <Disclosure as="nav" className="bg-zinc-50 fixed w-full z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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
                    <a href='#'>Início</a>
                  </div>
                  <div className="links-menu">
                    <a href='#'>Serviços</a>
                  </div>
                  <div className="links-menu">
                    <a href='#'>Serviços</a>
                  </div>
                  <div className="links-menu">
                    <a href='#'>Serviços</a>
                  </div>
                  <a href="https://github.com/caduce3" target='_blank'> 
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
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-verde-prototipo hover:bg-verde-prototipo hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
};