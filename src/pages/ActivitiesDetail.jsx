import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import imageNotFound from '../assets/images/image-not-found.png';
import BackButton from '../components/BackButton ';

const ActivitiesDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { workshop } = state || {};  // Obteniendo los datos pasados por el Link

  if (!workshop) {
    return <div className="container mx-auto my-10 p-4">No se encontró la actividad</div>;
  }

  return (
    <div className='flex flex-col container mx-auto'>
      <BackButton onClick={() => navigate(-1)} /> {/* Usando navigate para regresar */}
      <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <img className="w-full h-auto rounded-lg" src={workshop.imageUrl || imageNotFound} alt={workshop.title} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{workshop.title}</h1>
          <div className="text-lg mb-6">{workshop.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesDetail;
