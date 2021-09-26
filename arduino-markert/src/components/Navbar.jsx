import { Fragment } from 'react'
import { Popover, Transition, Menu } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';


import Logo from '../assets/img/logo mikrotronica v3.webp';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = (aling) => {

  const classOfDropdown = `origin-top-right absolute ${aling.position} mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`;


  return (
    <Popover>
      <div className="relative pt-6 px-2 sm:px-1 lg:px-1">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-20 w-auto sm:h-20"
                  src={Logo}
                  alt=""
                />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            <a href="/" className="font-medium text-gray-500 hover:text-gray-900">
              <i className="fas fa-home mx-1"></i>
              Inicio
            </a>
            <a href="/" className="font-medium text-gray-500 hover:text-gray-900">
              <i className="fas fa-microchip mx-1"></i>
              Productos
            </a>
            <Link
              className="font-medium text-gray-500 hover:text-gray-900"
              to="/blog"
            >
              <i className="fab fa-blogger-b mx-1"></i>
              Blog
            </Link>

            {/* Profile dropdown */}
            <Menu>

              <Menu.Button className="font-medium text-indigo-600 hover:text-indigo-500">
                <span className="sr-only">Open user menu</span>
                <a href="/#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Más
                </a>
                <i className="fas fa-chevron-circle-down mx-1"></i>
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className={classOfDropdown} >
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        <i className="fas fa-sign-in-alt mx-1"></i>
                        Inicia Sesión
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        <i className="fas fa-user-plus mx-1"></i>
                        Registráte
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
            {/* Profile dropdown */}

          </div>
        </nav>
      </div >

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src={Logo}
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                <i className="fas fa-home mx-1"></i>
                Inicio
              </a>
              <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                <i className="fas fa-microchip mx-1"></i>
                Productos
              </a>
              <Link
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                to="/blog"
              >
                <i className="fab fa-blogger-b mx-1"></i>
                Blog
              </Link>

            </div>
            <a
              href="/"
              className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
            >
              <i className="fas fa-sign-in-alt mx-1"></i>
              Inicia Sesión
            </a>
            <a
              href="/"
              className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
            >
              <i className="fas fa-user-plus mx-1"></i>
              Registráte
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover >
  )
}

export default Navbar;