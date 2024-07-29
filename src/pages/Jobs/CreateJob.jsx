import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderAdmin from '../../components/HeaderAdmin';
import axios from 'axios';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../../firebase.js';

const CreateJob = () => {
  const navigate = useNavigate();
  const [jobData, setJobData] = useState({
    title: "",
    content: "",
    location: "",
    phone: "",
    email: "",
    imageUrl: "",
  });
  const [image, setImage] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [error, setError] = useState("");

  const handleUploadImage = async () => {
    try {
      if (!image) {
        setImageUploadError('Please select an image');
        return null;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + image.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, image);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setImageUploadProgress(progress.toFixed(0));
          },
          (error) => {
            setImageUploadError('Image upload failed');
            setImageUploadProgress(null);
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImageUploadProgress(null);
              setImageUploadError(null);
              setJobData(prevData => ({ ...prevData, imageUrl: downloadURL }));
              resolve(downloadURL);
            });
          }
        );
      });
    } catch (error) {
      setImageUploadError('Image upload failed');
      setImageUploadProgress(null);
      console.log(error);
      return null;
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    const imageUrl = await handleUploadImage();

    if (imageUrl) {
      const jobDataWithImage = {
        ...jobData,
        imageUrl: imageUrl,
      };

      try {
        const res = await axios.post("http://localhost:3000/jobs", jobDataWithImage, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(res);
        navigate('/admin/jobs');
      } catch (error) {
        if (error.response && error.response.data) {
          setError(error.response.data.message);
        } else {
          setError("Error desconocido. Por favor, inténtelo de nuevo.");
        }
        console.log(error);
      }
    }
  };

  return (
    <div>
      <HeaderAdmin title={"Crear"} text={"Trabajo"} />
      <form onSubmit={handleCreate} className="mt-8 space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Título
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={jobData.title}
            onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Contenido
          </label>
          <textarea
            id="content"
            name="content"
            value={jobData.content}
            onChange={(e) => setJobData({ ...jobData, content: e.target.value })}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            rows="10"
            required
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Ubicación
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={jobData.location}
            onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
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
            id="phone"
            name="phone"
            value={jobData.phone}
            onChange={(e) => setJobData({ ...jobData, phone: e.target.value })}
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
            id="email"
            name="email"
            value={jobData.email}
            onChange={(e) => setJobData({ ...jobData, email: e.target.value })}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Imagen
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
          {imageUploadProgress && <p>Cargando imagen: {imageUploadProgress}%</p>}
          {imageUploadError && <p className='text-red-600'>{imageUploadError}</p>}
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
          >
            Crear Trabajo
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
