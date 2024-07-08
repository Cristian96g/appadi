import React, { useState } from 'react';
import axios from 'axios'
import HeaderAdmin from '../../components/HeaderAdmin';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const CreateComment = () => {

  const { user } = useContext(AuthContext); 

  const [commentData, setCommentData] = useState({
    blog: "66762051a58d1892733025f1",
    user: user ? user.id : "", 
    content: ""
  })
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleCreate = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/comments/", commentData)
    .then((res) => {
      console.log(res)
      navigate('/admin/comment')
    })
    .catch((error) => {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("Error desconocido. Por favor, inténtelo de nuevo.");
      }
      console.log(error);
    })
  }
  return (
    <div>
      <HeaderAdmin title={"Crear"} text={"Comentario"} />
      <form onSubmit={handleCreate} className="mt-8 space-y-6">
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Contenido
          </label>
          <textarea
            id="content"
            name="content"
            value={commentData.content}
            onChange={(e) => setCommentData({ ...commentData, content: e.target.value })}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            rows="10"
            required
          />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
          >
            Crear Comentario
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateComment