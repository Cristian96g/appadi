import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const ActivitiesDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBlog = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/blogs/${id}`);
            setBlog(response.data);
          } catch (error) {
            console.log('Error fetching the blog:', error);
            setError('Error fetching the blog. Please try again later.');
          }
        };
    
        fetchBlog();
      }, [id]);

      if (error) return <div>{error}</div>;
      if (!blog) return <div>Loading...</div>;
  return (
    <div className="container mx-auto my-10 p-4 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2">
        <img className="w-full h-auto rounded-lg" src={`../src/assets/${blog.imageUrl}`}
 alt={blog.title} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <div className="text-lg mb-6" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      </div>
    </div>
  );
}

export default ActivitiesDetail;