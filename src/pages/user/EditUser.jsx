import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeaderAdmin from '../../components/HeaderAdmin';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', username: ''});

  useEffect(() => {
    // Api para traer el usuario a travez del id
    fetch(`http://localhost:3000/users/find/${id}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error al obtener el usuario:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviando actualizacion de datos
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Usurio actualizado:', data);
        navigate('/admin/users');
      })
      .catch(error => console.error('Error al actualizar el usuario:', error));
  };

  return (


    <div>
      <HeaderAdmin title={"Editar Usuario"} text={`${user.name}`} />
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            name="username"
            value={user.username}
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
            Actualizar Usuario
          </button>
        </div>
      </form>
    </div>

  );
};

export default EditUser;