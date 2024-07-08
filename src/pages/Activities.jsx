import React, { useEffect, useState } from 'react'
import PageBanner from '../components/PageBanner'
import ActivityCard from '../components/ActivityCard'
// import { activities } from '../constants';
import axios from 'axios'

const Activities = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await axios.get('http://localhost:3000/blogs/');
          console.log('Blogs fetched:', response.data); // Verifica los datos aquí
          setBlogs(response.data);
        } catch (error) {
          console.log('Error fetching the blogs:', error);
          setError('Error fetching the blogs. Please try again later.');
        }
      };
  
      
      fetchBlogs(); 
    }, []);
  return (
    <>
    <PageBanner title={"Nuestros trabajos"} />

    <section className="container">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">Our Blog</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
      </div> 
      <div className="grid gap-8 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <ActivityCard blog={blog} key={blog._id}/>                 
        ))}
      </div>  
  </div>
</section>
    </>
  )
}

export default Activities