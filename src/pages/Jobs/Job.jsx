import React, { useEffect, useState } from 'react'
import { FaPencilAlt, FaEye } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import axios from 'axios';
import HeaderAdmin from '../../components/HeaderAdmin.jsx';
import Modal from '../../components/Modal.jsx';
import { formatDate, truncateText } from '../../utils/index.js';
import { app } from '../../firebase.js';
import { getStorage, ref, deleteObject } from 'firebase/storage';

const Job = () => {
  const [jobs, setJobs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/jobs/');
        setJobs(response.data);
        console.log(jobs)
      } catch (error) {
        console.log('Error al recuperar los trabajos:', error);
        setError('Error al recuperar los trabajos. Por favor, inténtelo de nuevo más tarde');
      }
    };

    fetchJobs();
  }, []);

  const handleDelete = async () => {
    try {
      if (selectedJob.imageUrl) {
        const storage = getStorage(app);
        const imageRef = ref(storage, selectedJob.imageUrl);

        try {
          await deleteObject(imageRef);
        } catch (error) {
          if (error.code === 'storage/object-not-found') {
            console.warn('La imagen no existe en Firebase Storage:', error);
          } else {
            throw error;
          }
        }
      }

      await axios.delete(`http://localhost:3000/jobs/${selectedJob._id}`);
      setJobs(jobs.filter(job => job._id !== selectedJob._id));
      setModalOpen(false);
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  };

  const openModal = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setModalOpen(false);
  };

  return (
    <div>
      <HeaderAdmin title={"Administrar"} text={"Trabajos"} />
      <div className="mt-4">
        <div className="mt-12 mb-6">
          <div className="bg-white shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2">
            <div className="flex justify-between mb-4 items-start text-gray-50">
              <div className="font-semibold text-base primaryColor">Trabajos</div>
              <div>
                <Link to={'/admin/job/create'} className='text-green-600'>Crear</Link>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              <table className="items-center w-full border-collapse">
                <thead className="bg-primary text-white rounded-md">
                  <tr>
                    <th className="th-table">Titulo</th>
                    <th className="th-table">Contenido</th>
                    <th className="th-table">Ubicación</th>
                    <th className="th-table">Telefono</th>
                    <th className="th-table">Email</th>
                    <th className="th-table">Imagen</th>
                    <th className="th-table min-w-140-px">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job) => (
                    <tr className="primaryColor" key={job._id}>
                      <th className="th-title">{job.title}</th>
                      <td className="th-title max-w-[22rem] whitespace-normal">{truncateText(job.content, 60)}</td>
                      <td className="th-title">{job.location}</td>
                      <td className="th-title">{job.phone}</td>
                      <td className="th-title">{job.email}</td>
                      <td className="th-title">
                        {
                        job.imageUrl && <img src={job.imageUrl} alt={job.imageUrl} className="w-20 h-20 object-cover" />}
                      </td>
                      <td className="td-button text-gray-900">
                        <div className="flex items-center space-x-4">
                          <Link to={`/admin/job/edit/${job._id}`} className="button-table btn-edit">
                            <FaPencilAlt className="h-4 w-4 mr-2 -ml-0.5" />
                            Editar
                          </Link>
                          <Link to={`/admin/job/detail/${job._id}`} className="button-table btn-preview">
                            <FaEye className="h-4 w-4 mr-2 -ml-0.5" />
                            Detalles
                          </Link>
                          <button type="button" onClick={() => openModal(job)} className="button-table btn-delete">
                            <RiDeleteBinLine className="h-4 w-4 mr-2 -ml-0.5" />
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <Modal
          title="Confirmar Eliminación"
          message={`¿Estás seguro que quieres eliminar el blog "${selectedJob.title}"?`}
          onConfirm={handleDelete}
          onCancel={closeModal}
        />
      )}
    </div>
  );
};

export default Job;
