import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/boardArduino.jpg';


const Register = () => {
    return (
        <div>
            {/* 	<!-- Container --> */}
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    {/* 	<!-- Row --> */}
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        {/* 	<!-- Col --> */}
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                            style={{ backgroundImage: `url(${Logo})` }}
                        ></div>
                        {/* 	<!-- Col --> */}
                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Registráte!</h3>

                            <form className="pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4 md:flex md:justify-between">

                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700">
                                            Nombre
                                        </label>
                                        <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                                            <div className="flex -mr-px">
                                                <span className="flex items-center leading-tight bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">
                                                    <i className="fas fa-user"></i>
                                                </span>
                                                <input
                                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none rounded-l-none focus:outline-none focus:shadow-outline"
                                                    id="firstName"
                                                    type="text"
                                                    placeholder="Ingresa tu nombre ..."
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700">
                                            Apellido
                                        </label>
                                        <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                                            <div className="flex -mr-px">
                                                <span className="flex items-center leading-tight bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">
                                                    <i className="fas fa-user"></i>
                                                </span>
                                                <input
                                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none rounded-l-none focus:outline-none focus:shadow-outline"
                                                    id="lastname"
                                                    type="text"
                                                    placeholder="Ingresa tus apellidos ..."
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="mb-4">

                                    <label className="block mb-2 text-sm font-bold text-gray-700">
                                        Email
                                    </label>

                                    <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                                        <div className="flex -mr-px">
                                            <span className="flex items-center leading-tight bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">
                                                <i className="fas fa-at"></i>
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            id="email"
                                            className="flex-shrink flex-grow flex-auto leading-tight w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:outline-none focus:shadow-outline"
                                            placeholder="Ingresa tu email ..." />
                                    </div>

                                </div>

                                <div className="mb-4 md:flex md:justify-between">

                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700">
                                            Contraseña
                                        </label>
                                        <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                                            <div className="flex -mr-px">
                                                <span className="flex items-center leading-tight bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">
                                                    <i className="fas fa-lock"></i>
                                                </span>
                                                <input
                                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none rounded-l-none focus:outline-none focus:shadow-outline"
                                                    id="password"
                                                    type="text"
                                                    placeholder="Ingresa tu contraseña ..."
                                                />
                                            </div>
                                        </div>
                                        {/*  <p class="text-xs italic text-red-500">Please choose a password.</p> */}
                                    </div>

                                    <div className="md:ml-2">

                                        <label className="block mb-2 text-sm font-bold text-gray-700">
                                            Confirma tu contraseña
                                        </label>
                                        <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                                            <div className="flex -mr-px">
                                                <span className="flex items-center leading-tight bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">
                                                    <i className="fas fa-lock"></i>
                                                </span>
                                                <input
                                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none rounded-l-none focus:outline-none focus:shadow-outline"
                                                    id="confirmPassword"
                                                    type="text"
                                                    placeholder="Confirma tu contraseña ..."
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        <i className="fas fa-sign-in-alt mx-2"></i>
                                        Registrate tu cuenta
                                    </button>
                                </div>

                                <hr className="mb-6 border-t" />

                                <div className="text-center">
                                    <Link
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        to="/login"
                                    >
                                        Ya tienes una cuenta? Inicia sesión!
                                    </Link>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register;
