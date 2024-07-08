import React, { useEffect, useState } from 'react'
import { FaPencilAlt, FaEye } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import axios from 'axios'
import HeaderAdmin from '../../components/HeaderAdmin';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';

const Comment = () => {
    const [comments, setComments] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedComment, setSelectedComment] = useState(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(' http://localhost:3000/comments/');
                console.log(response.data)
                setComments(response.data);
            } catch (error) {
                console.log('Error fetching the user:', error);
                setError('Error fetching the user. Please try again later.');
            }
        };

        fetchComments();
    }, []);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/comments/${selectedComment._id}`);
            setComments(comments.filter(comment => comment._id !== selectedComment._id));
            setModalOpen(false);
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    const openModal = (comment) => {
        setSelectedComment(comment);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedComment(null);
        setModalOpen(false);
    };


    return (
        <div>
            <HeaderAdmin title={"Administrar"} text={"comentarios"} />
            <div className="mt-4">
                <div className="mt-12 mb-6">
                    <div className="bg-white shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2">
                        <div className="flex justify-between mb-4 items-start">
                            <div className="font-semibold text-base primaryColor" >Comentarios</div>
                            <div className='primaryColor'>
                                <Link to={'/admin/comment/create'}>Crear</Link>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto">
                            <table className="items-center w-full border-collapse">
                                <thead className="bg-primary text-white rounded-md">
                                    <tr>
                                        <th className="th-table">Blog</th>
                                        <th className="th-table">Usuario</th>
                                        <th className="th-table min-w-140-px">Contenido</th>
                                        <th className="th-table min-w-140-px">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comments.map((comment) => (
                                        <tr className="primaryColor">
                                            <th className="th-title">{comment.blog?.title}</th>
                                            <td className="th-title">{comment.user?.username}</td>
                                            <td className="th-title max-w-[22rem] whitespace-normal">{comment.content}</td>
                                            <td class="td-button text-gray-900">
                                                <div class="flex items-center space-x-4">
                                                    <Link to={`/admin/comment/edit/${comment._id}`} class="button-table btn-edit">
                                                        <FaPencilAlt className="h-4 w-4 mr-2 -ml-0.5" />

                                                        Edit
                                                    </Link>
                                                    <Link to={`/admin/comment/detail/${comment._id}`}  class="button-table btn-preview">
                                                        <FaEye className="h-4 w-4 mr-2 -ml-0.5" />
                                                        Preview
                                                    </Link>
                                                    <button type="button" onClick={() => openModal(comment)} class="button-table btn-delete">
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
                    message={`¿Estás seguro que quieres eliminar el comentario "${selectedComment.content}"?`}
                    onConfirm={handleDelete}
                    onCancel={closeModal}
                />
            )}
        </div>
    )
}

export default Comment