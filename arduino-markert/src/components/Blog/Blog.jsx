import React from 'react';

import micro from '../../assets/img/micro.webp';

const Blog = () => {
    return (
        <>

            <section className="text-blueGray-700 bg-white mt-20">

                <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">

                    <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">

                        <h2
                            className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"
                        >
                            Your tagline
                        </h2>

                        <h1
                            className="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"
                        >
                            Historia de los microcontroladores
                        </h1>

                        <p
                            className="mb-8 text-base leading-relaxed text-left text-blueGray-600 "
                        >
                            El microcontrolador fue inventado en Texas Instruments en la década de 1970 , alrededor del mismo tiempo que el primer microprocesador estaba siendo inventado en Intel.
                        </p>

                        <div className="flex flex-col justify-center lg:flex-row">

                            <button
                                className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                            >
                                Ver
                            </button>

                        </div>

                    </div>

                    <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
                        <img
                            className="object-cover object-center rounded-lg "
                            alt="hero"
                            /* src="https://dummyimage.com/720x600/F3F4F7/8693ac"  */
                            src={micro}
                        />
                    </div>

                </div>

            </section>

          {/*   <section className="text-blueGray-700 bg-white mt-20">

                <div className="container flex flex-col items-center px-5 py-16 mx-auto  md:flex-row lg:px-28">

                    <div className="flex flex-col items-start w-full pt-0 mb-16 text-left  lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0">
                        <h1
                            className="mb-8 text-2xl font-black tracking-tighter text-black  md:text-5xl title-font"
                        >
                            Medium length display headline.
                        </h1>

                        <p
                            className="mb-8 text-base leading-relaxed text-left text-blueGray-600"
                        >
                            Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page.
                        </p>

                        <div className="flex flex-col w-full gap-2 md:justify-start md:flex-row">
                            <input
                                className="flex-grow w-full px-4 py-3 mb-4 text-base text-black transition ease-in-out transform rounded-lg  duration-650 lg:w-auto bg-blueGray-200 focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                                placeholder="Your Email" type="email"
                            />

                            <button
                                className="flex items-center px-6 py-3 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg  hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                            >
                                Subscribe
                            </button>

                        </div>

                        <p
                            className="w-full mt-2 mb-8 text-sm text-left text-blueGray-600"
                        >
                            I got 99 problems and blocks ain't one.
                        </p>

                    </div>

                    <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
                        <img
                            className="object-cover object-center rounded-lg"
                            alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac" />
                    </div>

                </div>

            </section> */}

        </>

    )
}

export default Blog
