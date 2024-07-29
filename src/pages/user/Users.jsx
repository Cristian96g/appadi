import React, { useEffect, useState } from 'react'
import { FaPencilAlt, FaEye } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import axios from 'axios'
import HeaderAdmin from '../../components/HeaderAdmin';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(' http://localhost:3000/users/');
                console.log(response.data)
                setUsers(response.data);
            } catch (error) {
                console.log('Error al recuperar el usuario:', error);
                setError('Error al recuperar el usuario. Por favor, inténtelo de nuevo más tarde');
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/users/${selectedUser._id}`);
            setUsers(users.filter(user => user._id !== user._id));
            setModalOpen(false);
        } catch (error) {
            console.error('Error al eliminar:', error);
        }
    };

    const openModal = (user) => {
        setSelectedUser(user);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedUser(null);
        setModalOpen(false);
    };


    return (
        <div>
            <HeaderAdmin title={"Administrar"} text={"Usuarios"} />
            <div className="mt-4">
                <div className="mt-12 mb-6">
                    <div className="bg-white shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2">
                        <div className="flex justify-between mb-4 items-start">
                            <div className="font-semibold text-base primaryColor" >Usuarios</div>
                        </div>
                        <div className="block w-full overflow-x-auto">
                            <table className="items-center w-full border-collapse">
                                <thead  className="bg-primary text-white rounded-md">
                                    <tr>
                                        <th className="th-table">Rol</th>
                                        <th className="th-table">Nombre</th>
                                        <th className="th-table min-w-140-px">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr className="primaryColor" key={user._id}>
                                            <th className="th-title">{user.role}</th>
                                            <td className="th-title">{user.name}</td>
                                     
                                            <td className="td-button text-gray-900 ">
                                                <div className="flex items-center space-x-4">
                                                <Link to={`/admin/users/edit/${user._id}`} className="button-table btn-edit">
                                                        <FaPencilAlt className="h-4 w-4 mr-2 -ml-0.5" />
                                                        Editar
                                                    </Link>
                                                    <Link to={`/admin/users/detail/${user._id}`} className="button-table btn-preview">
                                                    <FaEye className="h-4 w-4 mr-2 -ml-0.5" />
                                                        Ver
                                                    </Link>
                                                    <button type="button"
                                                    onClick={() => openModal(user)}   className="button-table btn-delete">
                                                      <RiDeleteBinLine className="h-4 w-4 mr-2 -ml-0.5" /> 
                                                        Delete
                                                    </button>
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
            {modalOpen && (
                <Modal
                    title="Confirmar Eliminación"
                    message={`¿Estás seguro que quieres eliminar el usuario "${selectedUser.name}"?`}
                    onConfirm={handleDelete}
                    onCancel={closeModal}
                />
            )}
        </div>
    )
}

export default Users