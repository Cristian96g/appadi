import React from 'react';
import { Link } from 'react-router-dom';

const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) {
    return text;
  }
  return words.slice(0, wordLimit).join(' ') + '...';
};

const JobsCard = ({ job }) => {
  const shortDescription = truncateText(job.content, 5); // Truncar a 20 palabras para móvil
  const fullDescription = truncateText(job.content, 25); // Texto completo para escritorio

  return (
    <div className=''>
      <Link to={`/jobs/${job._id}`} className="min-h-0 lg:min-h-[250px] flex items-center bg-white border max-h-80 border-green-200 rounded-lg shadow flex-row  hover:bg-gray-100">
        <img className="object-cover w-1/2 rounded-t-lg h-28 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={job.imageUrl} alt="" />
        <div className="flex flex-col justify-between w-1/2 md:w-full p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">
            {job.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700">
            <span className="block lg:hidden">{shortDescription}</span> {/* Mostrar texto truncado en móvil */}
            <span className="hidden lg:block">{fullDescription}</span> {/* Mostrar texto completo en escritorio */}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default JobsCard;
