import { RiHome3Line } from "react-icons/ri";
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { truncateText } from "../utils";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [cardChiqita, setCardChiqita] = useState([
        {
            num: 0,
            title: "Usuarios",
            href: "users"
        },
        {
            num: 0,
            title: "Blog",
            href: "blog"
        },
        {
            num: 0,
            title: "Comentarios",
            href: "comment"
        },
    ]);

    const [users, setUsers] = useState([]);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Llamada para obtener usuarios
        const fetchUsers = async () => {
            try {
                const response = await axios.get(' http://localhost:3000/users/');
                setUsers(response.data);
                setCardChiqita(prevState => {
                    const newState = [...prevState];
                    newState[0].num = response.data.length;
                    return newState;
                });
            } catch (error) {
                console.log('Error fetching the user:', error);
                setError('Error fetching the user. Please try again later.');
            }
        };

        fetchUsers();
        // Llamada para obtener blogs
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(' http://localhost:3000/blogs/');
                setBlogs(response.data);
                setCardChiqita(prevState => {
                    const newState = [...prevState];
                    newState[1].num = response.data.length;
                    return newState;
                });
            } catch (error) {
                console.log('Error fetching the blog:', error);
                setError('Error fetching the blog. Please try again later.');
            }
        };

        fetchBlogs();
    }, []);  
    return (
        <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {/* card chiquitas */}
                {cardChiqita.map((card) => (
                    <div className="bg-primary text-white rounded-md p-6 shadow-md shadow-black/5" key={card.title}>
                        <div className="flex justify-between mb-6">
                            <div className="">
                                <div className="flex items-center mb-1">
                                    <div className="text-3xl font-semibold">{card.num}</div>
                                </div>
                                <div className="text-md font-semibold ">{card.title}</div>
                            </div>
                        </div>
                        <Link to={`/admin/${card.href}`} className="font-medium text-sm hover:text-gray-800">Ver más</Link>
                    </div>
                ))}
                {/* end card chiquitas */}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-white  w-full shadow-lg rounded-md">
                    <div className="rounded-t mb-0 px-0 border-0">
                        <div className="flex flex-wrap items-center px-4 py-2">
                            <div className="relative w-full max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-base primaryColor">Usuarios</h3>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto">
                            <table className="items-center w-full border-collapse">
                                <thead className="bg-primary text-white rounded-md">
                                    <tr>
                                        <th className="th-table">Rol</th>
                                        <th className="th-table">Nombre</th>
                                        <th className="th-table min-w-140-px">Aciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.slice(0,3).map((user) => (
                                        <tr className="primaryColor" key={user._id}>
                                            <th className="th-title">{user.role}</th>
                                            <td className="th-title">{user.name}</td>
                                            <td className="th-title">
                                                <div className="flex items-center">
                                                    <Link to={`/admin/users/detail/${user._id}`}>Ver más</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-white  w-full shadow-lg rounded-md">
                    <div className="rounded-t mb-0 px-0 border-0">
                        <div className="flex flex-wrap items-center px-4 py-2">
                            <div className="relative w-full max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-base primaryColor">Blog</h3>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto">
                            <table className="items-center w-full border-collapse">
                                <thead className="bg-primary text-white rounded-md">
                                    <tr>
                                        <th className="th-table">Titulo</th>
                                        <th className="th-table">contenido</th>
                                        <th className="th-table">Fecha</th>
                                        <th className="th-table min-w-140-px">Aciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blogs.slice(0,3).map((blog) => (
                                        <tr className="primaryColor" key={blog.title}>
                                            <th className="th-title">{blog.title}</th>
                                            <td className="th-title">{truncateText(blog.content,60)}</td>
                                            <td className="th-title">{blog.date}</td>
                                            <td className="th-title">
                                                <div className="flex items-center">
                                                    <Link to={`/admin/`}>Ver más</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="shadow-md bg-white shadow-black/5 p-6 rounded-md lg:col-span-2">
                    <div className="flex justify-between mb-4 items-start">
                        <div className="font-semibold text-base primaryColor" >Comentarios</div>
                    </div>
                    <div className="block w-full overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead className="bg-primary text-white rounded-md">
                                <tr>
                                    <th className="th-table">Rol</th>
                                    <th className="th-table">Nombre</th>
                                    <th className="th-table min-w-140-px">comentario</th>
                                    <th className="th-table min-w-140-px">Aciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.slice(0,3).map((user) => (
                                    <tr className="primaryColor" key={user.name}>
                                        <th className="th-table">{user.user}</th>
                                        <td className="th-table">{user.name}</td>
                                        <td className="th-table min-w-140-px">
                                            <div className="flex items-center">
                                                <a href="">Ver más</a>
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                    <div>
                        <canvas id="order-chart"></canvas>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard