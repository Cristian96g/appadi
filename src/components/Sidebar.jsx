import React, { useContext, useState } from 'react'
// Icons
import { RiHome3Line, RiLogoutBoxLine  } from "react-icons/ri";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import Cookies from 'js-cookie';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'


const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Elimina la cookie y el usuario del contexto
        Cookies.remove('jwToken');
        setUser(null);
        // Redirige al login
        navigate('/login');
    };

    const links = [
        {
            a: "/admin",
            title: "Admin"
        },
        {
            a: "/admin/blog",
            title: "Blog"
        },
        {
            a: "/admin/users",
            title: "Users"
        },
        {
            a: "/admin/comment",
            title: "Comentarios"
        },

    ]
    return (
        <>
            <div className={`h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${showMenu ? "left-0" : "-left-full"}`}>
                {/* Profile */}
                <div className='flex flex-col items-center justify-center p-8 gap-2 h-[30vh]'>
                    <img src="https://placehold.co/400" alt="" className='w-20 h-20 object-cover rounded-full ring-2 ring-primary-100' />
                    <h1 className='text-xl primaryColor font-bold'>Cristian Gómez</h1>
                    <p className='bg-primary-100 py-1 px-3 rounded-full primaryColor'>Pro Level</p>
                </div>
                {/* Nav */}
                <div className='bg-primary-300 p-8 rounded-tr-[100px] h-[70vh]  flex flex-col justify-between gap-8'>
                    <nav className='flex flex-col gap-2'>
                        {links.map((link) => (
                            <Link to={link.a} className={`flex items-center gap-4  py-2 px-4 rounded-xl hover:hoverColor transition-colors ${location.pathname === link.a ? 'text-white activeColor' : 'primaryColor'}`}><RiHome3Line />
                                {link.title}</Link>
                        ))}
                    <button onClick={handleLogout} className="flex items-center gap-4  py-2 px-4 rounded-xl hover:hoverColor transition-colors primaryColor">
                        <RiLogoutBoxLine /> Cerrar sesion
                    </button>
                    </nav>
                    <div className='bg-primary text-white p-4 rounded-xl'>
                        <p className=''>Having troubles?</p>
                        <a href="">Contact us</a>
                    </div>
                </div>

            </div>
            <button onClick={() => setShowMenu(!showMenu)} className='lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-3 rounded-full text-white z-50'>
                {
                    showMenu ? <IoCloseOutline /> : <IoMenu />
                }

            </button>

        </>
    )
}

export default Sidebar