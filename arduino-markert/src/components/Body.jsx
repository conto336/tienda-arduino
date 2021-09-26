import React from 'react';


import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";

import ImgSide from '../assets/img/board+arduino.jpg';
import Arduino from '../assets/img/tank-arduino.jpg';
import Raspberry from '../assets/img/raspberry.jpg';
import ArduinoUno from '../assets/img/arduinoUno.jpg';
import ArduinoBoard from '../assets/img/Arduino.jpg';
import { Link } from 'react-scroll';

const Body = () => {


    return (
        <>
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>

                        <Navbar position="right-0" />

                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h3 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-3xl">
                                    <span className="block xl:inline">
                                        ARDUINO NICARAGUA
                                        ventas@mikrotronica.cc
                                    </span>
                                </h3>
                                <br />
                                <h5 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-3xl">
                                    <span className="block text-indigo-600 xl:inline">
                                        Whatsapp
                                        85996576 / 85765668
                                    </span>
                                </h5>

                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">

                                        <Link
                                            to="contact"
                                            spy={true}
                                            smooth={true}
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <i className="fas fa-id-badge mx-1"></i>
                                            Contacté
                                        </Link>
                                        {/*  <a
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                            href="/#contact"
                                        >
                                            <i className="fas fa-id-badge mx-1"></i>
                                            Contacté
                                        </a> */}
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a
                                            href="/"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                                        >
                                            <i className="fas fa-store-alt mx-1"></i>
                                            Tienda
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <About />
                            <Contact />
                            <br class="hidden lg:block" />
                            <p class="leading-relaxed mb-5 font-bold text-gray-600">Donde estamos ubicados</p>
                            <section class="text-gray-600 body-font relative">
                                <div class="absolute inset-0 bg-gray-300">
                                    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.598935037182!2d-86.2622545860125!3d12.139570491405532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71560094d5a263%3A0xe8dd8016c664ef4f!2sArduino%20Nicaragua!5e0!3m2!1ses!2sni!4v1632697323569!5m2!1ses!2sni" allowfullscreen="" loading="lazy"> </iframe>
                                </div>
                                <div class="container px-5 py-24 mx-auto flex">
                                    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                                    </div>
                                </div>
                            </section>

                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 ">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 "
                        src={ImgSide}
                        alt=""
                    />
                    <br />
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 "
                        src={Arduino}
                        alt=""
                    />
                    <br />
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 "
                        src={Raspberry}
                        alt=""
                    />
                    <br />
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 "
                        src={ArduinoBoard}
                        alt=""
                    />
                    <br />
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 "
                        src={ArduinoUno}
                        alt=""
                    />
                </div>

            </div>
        </>
    )
}

export default Body;
