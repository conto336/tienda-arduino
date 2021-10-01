import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import Logo from '../../assets/img/boardArduino.jpg';




const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const autenticateLogin = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('device', 'postman');
        let data = {
            email: email,
            password: password,
            device: 'react',
        }

        fetch('http://192.168.100.100/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.errors);
                if (data.message === 'Unauthorized') {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Your data is incorrect',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else if (data.message === 'Success') {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your data is correct',
                        showConfirmButton: false,
                        timer: 1500
                    });

                } else if (data.errors) {
                    alert('Los campos no deben estar vacios')
                }
            })
    }

    return (
        <div>

            {/* <!-- component --> */}
            {/* <!-- Container --> */}
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    {/*  <!-- Row --> */}
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        {/* <!-- Col --> */}
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                            style={{ backgroundImage: `url(${Logo})` }}
                        ></div>
                        {/*  <!-- Col --> */}
                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Inicia sesión</h3>
                            <form className="pt-6 pb-8 mb-4 bg-white rounded">

                                <div className="mb-4">
                                    <label htmlFor="email">Email</label>
                                    <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                                        <div className="flex -mr-px">
                                            <span className="flex items-center leading-tight bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">
                                                <i className="fas fa-at"></i>
                                            </span>
                                        </div>
                                        <input
                                            type="email"
                                            className="flex-shrink flex-grow flex-auto leading-tight w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:outline-none focus:shadow-outline"
                                            placeholder="Ingresa tu email ..."
                                            onBlur={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email">Contraseña</label>
                                    <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                                        <div className="flex -mr-px">
                                            <span className="flex items-center leading-tight bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">
                                                <i className="fas fa-lock"></i>
                                            </span>
                                        </div>
                                        <input
                                            type="password"
                                            className="flex-shrink flex-grow flex-auto leading-tight w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:outline-none focus:shadow-outline"
                                            placeholder="Ingresa tu contraseña ..."
                                            onBlur={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="button"
                                        onClick={(e) => autenticateLogin(e)}
                                    >
                                        <i className="fas fa-sign-in-alt mx-2"></i>
                                        Ingresa
                                    </button>
                                </div>

                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="/"
                                    >
                                        Olvidaste tu contraseña?
                                    </a>
                                </div>
                                <div className="text-center">
                                    <Link
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        to="/register"
                                    >
                                        Aún no estas registrado? Registrate!
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

export default Login;
