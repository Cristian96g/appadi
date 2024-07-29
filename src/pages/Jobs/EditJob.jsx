import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeaderAdmin from '../../components/HeaderAdmin';
import { app } from '../../firebase.js';
import { getStorage, ref, deleteObject, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState({ title: '', content: '', imageUrl: '', location: '', phone: '', email: '' });
  const [newImage, setNewImage] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/jobs/${id}`)
      .then(response => response.json())
      .then(data => setJob(data))
      .catch(error => console.error('Error fetching job:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({ ...prevJob, [name]: value }));
  };

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let updatedJob = { ...job };
  
    if (newImage) {
      const storage = getStorage(app);
      const oldImageRef = ref(storage, job.imageUrl);
  
      if (job.imageUrl) {
        try {
          await deleteObject(oldImageRef);
        } catch (error) {
          console.error('Error deleting old image:', error);
        }
      }
  
      const newImageRef = ref(storage, new Date().getTime() + '-' + newImage.name);
      const uploadTask = uploadBytesResumable(newImageRef, newImage);
  
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError('Image upload failed');
          setImageUploadProgress(null);
          console.error('Error uploading new image:', error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            setImageUploadProgress(null);
            setImageUploadError(null);
            updatedJob = { ...updatedJob, imageUrl: downloadURL };
  
            console.log('Updated:', updatedJob);
  
            const response = await fetch(`http://localhost:3000/jobs/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedJob),
            });
  
            if (!response.ok) {
              throw new Error('Error updating job');
            }
  
            const data = await response.json();
            console.log('Job updated:', data);
            navigate('/admin/jobs');
          } catch (error) {
            console.error('Error updating job:', error);
          }
        }
      );
    } else {
      try {
        console.log('Updated:', updatedJob);
  
        const response = await fetch(`http://localhost:3000/jobs/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedJob),
        });
  
        if (!response.ok) {
          throw new Error('Error updating job');
        }
  
        const data = await response.json();
        console.log('Job updated:', data);
        navigate('/admin/jobs');
      } catch (error) {
        console.error('Error updating job:', error);
      }
    }
  };

  return (
    <div>
      <HeaderAdmin title={"Editar trabajo"} text={job.title} />
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Título
          </label>
          <input
            type="text"
            name="title"
            value={job.title}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Ubicación
          </label>
          <input
            type="text"
            name="location"
            value={job.location}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Teléfono
          </label>
          <input
            type="text"
            name="phone"
            value={job.phone}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={job.email}
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
            value={job.content}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            rows="10"
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
            Imagen
          </label>
          {job.imageUrl && <img src={job.imageUrl} alt="Current" className="w-20 h-20 object-cover mb-2" />}
          <input
            type="file"
            id="imageUrl"
            name="imageUrl"
            onChange={handleImageChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
          {imageUploadProgress && <p>Cargando imagen: {imageUploadProgress}%</p>}
          {imageUploadError && <p className='text-red-600'>{imageUploadError}</p>}
        </div>
        <div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
          >
            Editar trabajo
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditJob;
