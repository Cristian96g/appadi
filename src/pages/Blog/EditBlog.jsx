import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import HeaderAdmin from '../../components/HeaderAdmin';

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({ title: '', content: '', imageUrl: '' });

  useEffect(() => {
    // Api para traer el blog a travez del id
    fetch(`http://localhost:3000/blogs/${id}`)
      .then(response => response.json())
      .then(data => setBlog(data))
      .catch(error => console.error('Error fetching blog:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({ ...prevBlog, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviando actualizacion de datos
    fetch(`http://localhost:3000/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Blog updated:', data);
        navigate('/blog');
      })
      .catch(error => console.error('Error updating blog:', error));
  };

  return (


    <div>
      <HeaderAdmin title={"Editar blog"} text={`${blog.title}`} />
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Título
          </label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Contenido
          </label>
          <textarea
            name="content"
            value={blog.content}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            rows="10"
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
            URL de la Imagen
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={blog.imageUrl}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
          >
            Crear Blog
          </button>
        </div>
      </form>
    </div>

  );
};

export default EditBlog;