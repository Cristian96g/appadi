import { useParams } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useEffect, useState } from "react";
import { formatDate } from "../../utils";

const DetailJob = () => {
    const { id } = useParams();
    const [job, setJob] = useState({ 
        title: '',
        content: '',
        imageUrl: '',
        location: '',
        phone: '',
        email: ''
    });

    useEffect(() => {
        // API para traer el trabajo a través del id
        fetch(`http://localhost:3000/jobs/${id}`)
            .then(response => response.json())
            .then(data => {
              console.log('Job data fetched from API:', data); 
              setJob(data);
            })
            .catch(error => console.error('Error fetching job:', error));
    }, [id]);

    return (
        <div>
            <HeaderAdmin title={"Detalles del Trabajo"} text={job.title} />
            <div className="mt-8 space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Título
                    </label>
                    <p className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        {job.title}
                    </p>
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Ubicación
                    </label>
                    <p className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        {job.location}
                    </p>
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Teléfono
                    </label>
                    <p className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        {job.phone}
                    </p>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <p className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        {job.email}
                    </p>
                </div>
                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                        Contenido
                    </label>
                    <p className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        {job.content}
                    </p>
                </div>
                <div className="max-w-80 ">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Imagen
                    </label>
                    {job.imageUrl && (
                        <img src={job.imageUrl} alt="Job Image" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default DetailJob;
