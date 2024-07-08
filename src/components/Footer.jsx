import { NavLink } from 'react-router-dom';
import { navLinks } from '../constants/index.js';
import ongImage from "../assets/images/ong.png"
import { ImDroplet } from "react-icons/im";


import { FaInstagram, FaFacebook } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-white ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img src={ongImage} class="h-14 me-3" alt="ong image" />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-green-700 uppercase">Nosotros</h2>
                            <ul className="text-green-500  font-medium">
                                {navLinks.map((nav) => (
                                    <li className="mb-2" key={nav.id}>
                                        <NavLink
                                            to={`/${nav.id}`}
                                            lass="hover:underline"
                                        >
                                            {nav.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-green-700 uppercase ">Legal</h2>
                            <ul className="text-green-500  font-medium">
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Politicas de Privacidad</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terminos y Condiciones</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-green-500 sm:mx-auto  lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-green-600 sm:text-center ">© 2024 <a href="https://www.potrerodigital.org/" className="hover:underline">Potrero Digital</a>. Todos los derechos reservados.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com/profile.php?id=100081438307111&locale=az_AZ" target='_blank' className="text-green-500 hover:text-gray-900 ">
                            <FaFacebook size={20} />
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="https://www.instagram.com/fundacion_lemuel_co/" target='_blank' className="text-green-500 hover:text-gray-900  ms-5">
                            <FaInstagram size={20} />
                            <span className="sr-only">Instagram</span>
                        </a>

                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;