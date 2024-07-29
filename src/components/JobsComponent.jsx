import React from 'react';
import ActivityCard from './ActivityCard';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import Button from './Button';
import JobsCard from './JobsCard';

const JobsComponent = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/blogs/');
        console.log('Blogs fetched:', response.data); // Verifica los datos aquí
        setJobs(response.data.slice(0, 4));
      } catch (error) {
        console.log('Error fetching the blogs:', error);
        setError('Error fetching the blogs. Please try again later.');
      }
    };

    
    fetchBlogs(); 
  }, []);
  return (
    <section className="activities py-6 lg:mt-16">
      <div className="container mx-auto">
        <div className="mx-auto max-w-lg text-center">
          <h2>Nuestros Trabajos</h2>

          <p className="mt-4 text-gray-600">
          Descubre más sobre nuestras diversas actividades y cómo impactan positivamente en la comunidad local y más allá.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 mt-8 md:mt-12">
          {jobs.map((job) => (
            <JobsCard key={job._id} job={job} />
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default JobsComponent;


