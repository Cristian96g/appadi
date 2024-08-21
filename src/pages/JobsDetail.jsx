import { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton ';
import imageNotFound from '../assets/images/image-not-found.png';
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

// Mapeo de strings a componentes
// Mapeo de iconos a componentes
const iconMap = {
    email: MdEmail,
    location: FaLocationDot,
    phone: FaPhone,
};

const JobsDetail = () => {
    const contactRef = useRef(null);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const navigate = useNavigate();
    const { state } = useLocation();
    const job = state?.job;

    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!job) {
        return (
            <div className="container mx-auto my-10 p-4">
                <p>No se encontraron datos para el trabajo seleccionado.</p>
                <button onClick={() => navigate(-1)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                    Volver
                </button>
            </div>
        );
    }

    return (
        <div className='flex flex-col container mx-auto'>
            <BackButton onClick={() => navigate(-1)} />

            <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2">
                    <img className="w-full h-auto rounded-lg" src={job.imageUrl || imageNotFound} alt={job.title || 'Job image'} />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-4">{job.title || 'Job Title'}</h1>
                    <div className="text-lg mb-6">{job.description}</div>
                    <button onClick={scrollToContact} className="text-start text-green-600 hover:underline">
                    Encontranos en nuestra ubicación y contacto
                    </button>

                </div>
            </div>

            <div ref={contactRef} className="container px-6 pt-6 pb-12 mx-auto">
                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">Nuestro contacto</h1>
                <p className="mt-3 text-gray-500 dark:text-gray-400">Our friendly team is always here to chat.</p>

                <div className="grid grid-cols-1 gap-6 md:gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {job.contacts.map((contact, index) => {
                        const IconComponent = iconMap[contact.icon];  // Obtienes el componente desde el mapeo
                        return (
                            <div key={index} className="p-4 rounded-lg bg-green-50 md:p-6">
                                <span className="inline-block p-3 text-green-500 rounded-lg bg-green-100/80">
                                    {IconComponent && <IconComponent className='w-5 h-5' />}  {/* Renderizas el ícono */}
                                </span>
                                <h2 className="mt-4 text-base font-medium text-gray-800">{contact.type}</h2>
                                <p className="mt-2 text-sm text-gray-500">{contact.value}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default JobsDetail;