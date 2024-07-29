import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton ';
import imageNotFound from '../assets/images/image-not-found.png'


const ActivitiesDetail = () => {
  const { id } = useParams();
  const [activitie, setactivitie] = useState({ title: '', content: '', imageUrl: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API para traer el trabajo a través del id
    fetch(`http://localhost:3000/blogs/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Job data fetched from API:', data);
        setactivitie(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching job:', error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="container mx-auto my-10 p-4">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto my-10 p-4">Error: {error.message}</div>;
  }

  if (!activitie) {
    return <div className="container mx-auto my-10 p-4">No job found</div>;
  }

  return (<div className='flex flex-col container mx-auto'>
    <BackButton />

    <div className="container mx-auto  p-4 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2">
        <img className="w-full h-auto rounded-lg" src={activitie.imageUrl || imageNotFound} alt={activitie.title || 'Job image'} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">{activitie.title || 'Job Title'}</h1>
        <div className="text-lg mb-6">{"Uso de useNavigate: Se importa el hook useNavigate de react-router-dom y se usa para obtener la función de navegación navigate. handleBack: Función que llama a navigate(-1) para retroceder un paso en el historial de navegación cuando se hace clic en el botón. Cambio de Link a button: Reemplaza el componente Link con un elemento button para manejar la lógica de navegación mediante useNavigate. Clase de Botón: Se mantiene la clase y el estilo del botón, solo se cambió el componente HTML de Link a button."}</div>
      </div>
    </div>

  </div>
  );
}

export default ActivitiesDetail;
