import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton ';
import { MdEmail } from "react-icons/md";
import { FaLocationDot,FaPhone } from "react-icons/fa6";
import imageNotFound from '../assets/images/image-not-found.png'


const JobsDetail = () => {
    const { id } = useParams();
    const [job, setJob] = useState({ title: '', content: '', imageUrl: '' });
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
                setJob(data);
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

    if (!job) {
        return <div className="container mx-auto my-10 p-4">No job found</div>;
    }

    return (<div className='flex flex-col container mx-auto'>
        <BackButton />

        <div className="container mx-auto  p-4 flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
                <img className="w-full h-auto rounded-lg" src={job.imageUrl || imageNotFound} alt={job.title || 'Job image'} />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-4">{job.title || 'Job Title'}</h1>
                <div className="text-lg mb-6">{"Uso de useNavigate: Se importa el hook useNavigate de react-router-dom y se usa para obtener la función de navegación navigate. handleBack: Función que llama a navigate(-1) para retroceder un paso en el historial de navegación cuando se hace clic en el botón. Cambio de Link a button: Reemplaza el componente Link con un elemento button para manejar la lógica de navegación mediante useNavigate. Clase de Botón: Se mantiene la clase y el estilo del botón, solo se cambió el componente HTML de Link a button."}</div>
            </div>
        </div>

            <div class="container px-6 pt-6 pb-12 mx-auto">
                <div>

                    <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">Nuestro contacto</h1>

                    <p class="mt-3 text-gray-500 dark:text-gray-400">Our friendly team is always here to chat.</p>
                </div>

                <div class="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div class="p-4 rounded-lg bg-green-50 md:p-6 ">
                        <span class="inline-block p-3 text-green-500 rounded-lg bg-green-100/80 ">
                            <MdEmail className='w-5 h-5 '/>
                        </span>

                        <h2 class="mt-4 text-base font-medium text-gray-800 ">Chat to sales</h2>
                        <p class="mt-2 text-sm text-gray-500 ">Speak to our friendly team.</p>
                        <p class="mt-2 text-sm text-green-500 ">hello@merakiui.com</p>
                    </div>

                    <div class="p-4 rounded-lg bg-green-50 md:p-6 ">
                        <span class="inline-block p-3 text-green-500 rounded-lg bg-green-100/80 ">
                        <MdEmail className='w-5 h-5 '/>
                        </span>

                        <h2 class="mt-4 text-base font-medium text-gray-800 ">Chat to support</h2>
                        <p class="mt-2 text-sm text-gray-500 ">We’re here to help.</p>
                        <p class="mt-2 text-sm text-green-500 ">Start new chat</p>
                    </div>

                    <div class="p-4 rounded-lg bg-green-50 md:p-6 ">
                        <span class="inline-block p-3 text-green-500 rounded-lg bg-green-100/80 ">
                        <FaLocationDot className='w-5 h-5 '/>

                        </span>

                        <h2 class="mt-4 text-base font-medium text-gray-800 ">Visit us</h2>
                        <p class="mt-2 text-sm text-gray-500 ">Visit our office HQ..</p>
                        <p class="mt-2 text-sm text-green-500 ">100 Smith Street Collingwood VIC 3066 AU</p>
                    </div>

                    <div class="p-4 rounded-lg bg-green-50 md:p-6 ">
                        <span class="inline-block p-3 text-green-500 rounded-lg bg-green-100/80 ">
                            <FaPhone className='w-5 h-5' />
                        </span>

                        <h2 class="mt-4 text-base font-medium text-gray-800 ">Call us</h2>
                        <p class="mt-2 text-sm text-gray-500 ">Mon-Fri from 8am to 5pm.</p>
                        <p class="mt-2 text-sm text-green-500 ">+1 (555) 000-0000</p>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default JobsDetail;
