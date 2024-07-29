import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Login = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const { setUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (data) => {
        axios.post("http://localhost:3000/users/login", {
            email: data.email,
            password: data.password
        })
        .then((res) => {
            setUser(res.data.usuario);
            Cookies.set('jwToken', res.data.jwToken, { expires: 1 });

            // Redirigir basado en el rol
            if (res.data.usuario.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/');
            }
        })
        .catch((error) => {
            setError(error.response.data.msj || "Error en el inicio de sesión");
        });
    };

    return (
        <div>
            <section className='container'>
                <div className="flex flex-col items-center justify-center px-6 py-8 lg:mb-16 mx-auto">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                        <img className="w-8 h-8 mr-2" src="../src/assets/images/ong.png" alt="logo" />
                    </a>
                    <div className="w-full rounded-lg  md:mt-0 sm:max-w-md xl:p-0 lg:py-22 shadow-xl shadow-[rgba(46,58,44,0.24)]">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-86">
                            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-green-500 md:text-2xl">
                                Inicia sesión con tu cuenta
                            </h1>
                            <form onSubmit={handleSubmit(handleLogin)} className='space-y-4 md:space-y-6'>
                                <div>
                                    <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900'>Correo electrónico</label>
                                    <input
                                        {...register('email', {
                                            required: '*El email es requerido',
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                message: 'Email no es válido'
                                            }
                                        })}
                                        type="email"
                                        placeholder="Correo electrónico"
                                        name="email"
                                        className="bg-gray-50 border border-green-300 text-gray-900 rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900'>Contraseña</label>
                                    <input
                                        {...register('password', {
                                            required: '*La contraseña es requerida',
                                        })}
                                        type="password"
                                        placeholder="Contraseña"
                                        name="password"
                                        className="bg-gray-50 border border-green-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    />
                                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                                </div>
                                <div>
                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        Iniciar sesión
                                    </button>
                                </div>
                            </form>
                            {error && <p className='text-red-500'>{error}</p>}
                        <p className="text-sm font-light text-gray-500 ">
                      No tienes cuenta? <Link to={'/register'} className="font-medium text-green-600 hover:underline ">Registrate</Link>
                  </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;
