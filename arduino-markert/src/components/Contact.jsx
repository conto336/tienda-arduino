import React from 'react';

const Contact = () => {

    return (

        <div id="contact">

            <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Contáctanos</h1>
            <form className=" w-full p-10 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg ">

                <div className="relative pt-4">
                    <label htmlFor="name" className="text-base leading-7 text-blueGray-500">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Ingresa tu nombre ..."
                        required
                        className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                    />
                </div>

                <div className="relative pt-4">
                    <label htmlFor="name" className="text-base leading-7 text-blueGray-500">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Ingresa tu email ..."
                        required
                        className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                    />
                </div>

                <div className="relative pt-4">
                    <label htmlFor="name" className="text-base leading-7 text-blueGray-500">Asunto</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Asunto ..."
                        className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                    />
                </div>

                <div className="flex flex-wrap mt-4 mb-6 -mx-3">
                    <div className="w-full px-3">
                        <label htmlFor="name" className="text-base leading-7 text-blueGray-500">Escribeme tu mensaje ... </label>
                        <textarea
                            className="w-full h-32 px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand"
                            id="message"
                            type="text"
                            name="message"
                            placeholder="Escribéme tu mensaje"
                            required=""

                        >
                        </textarea>
                    </div>
                </div>

                <div className="flex items-center w-full pt-4 mb-4">
                    <button
                        className="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 "
                    >
                        <i className="fab fa-telegram-plane mx-2"></i>
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact;