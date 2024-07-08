import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeaderAdmin from '../../components/HeaderAdmin';

const EditComment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState({ content: '' });

  useEffect(() => {
    // Api para traer el comentario a través del id
    fetch(`http://localhost:3000/comments/${id}`)
      .then(response => response.json())
      .then(data => setComment(data))
      .catch(error => console.error('Error fetching comment:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment((prevComment) => ({ ...prevComment, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviando actualización de datos
    fetch(`http://localhost:3000/comments/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Comment updated:', data);
        navigate('/admin/comment'); // Redirigir a la lista de comentarios
      })
      .catch(error => console.error('Error updating comment:', error));
  };

  return (
    <div>
      <HeaderAdmin title={"Editar comentario"} text={`${comment.content}`} />
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Contenido
          </label>
          <textarea
            name="content"
            value={comment.content}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            rows="10"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
          >
            Actualizar Comentario
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditComment;
