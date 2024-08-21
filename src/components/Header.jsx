import { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";

import ongImage from "../assets/images/ong.png"

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="relative">
            <div className="container px-4 sm:px-6">
                <div className="flex justify-between items-center py-6">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#hero">
                            <img src={ongImage} alt="" className="h-16" />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button
                            type="button"
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                            onClick={() => setOpen(!open)}
                        >
                            <span className="sr-only">Open menu</span>
                            {open ? <IoIosClose className="h-6 w-6" color='#F97316' /> : <IoIosMenu className="h-6 w-6" color='#F97316' />}
                        </button>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        {navLinks.map((nav) => (
                            <NavLink
                                key={nav.href}
                                to={`/${nav.href}`}
                                className={`text-[18px] font-medium text-green-500 hover:text-green-700 cursor-pointer ${({ isActive }) =>
                                    isActive ? "active" : ""
                                    }`}
                            >
                                {nav.title}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
            <div className={`transition-all duration-700 ${open ? "block md:hidden" : "hidden"}`}>
                <div className="bg-white py-3 px-4">
                    {navLinks.map((nav) => (
                        <NavLink
                            key={nav.href}
                            to={`/${nav.href}`}
                            className="block text-base -m-3 p-3 font-medium text-green-500 hover:text-green-700 hover:bg-gray-50 cursor-pointer"
                            onClick={() => setOpen(false)}
                        >
                            <span className="ml-3 text-base font-medium ">
                                {nav.title}
                            </span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
