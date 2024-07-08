import React from 'react';
import ActivityCard from './ActivityCard';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

const ActivitiesComponent = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/blogs/');
        console.log('Blogs fetched:', response.data); // Verifica los datos aquí
        setBlogs(response.data.slice(0, 3));
      } catch (error) {
        console.log('Error fetching the blogs:', error);
        setError('Error fetching the blogs. Please try again later.');
      }
    };

    
    fetchBlogs(); 
  }, []);
  return (
    <section className="activities py-6">
      <div className="container mx-auto">
        <div className="mx-auto max-w-lg text-center">
          <h2>Nuestras Actividades</h2>

          <p className="mt-4 text-gray-600">
          Descubre más sobre nuestras diversas actividades y cómo impactan positivamente en la comunidad local y más allá.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-12">
          {blogs.map((blog) => (
            <ActivityCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesComponent;


