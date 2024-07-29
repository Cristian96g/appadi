import { useParams } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useEffect, useState } from "react";
import { formatDate } from "../../utils";

const DetailBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({ title: '', content: '', author: '', date: '' });

    useEffect(() => {
        // API para traer el usuario a través del id
        fetch(`http://localhost:3000/blogs/${id}`)
            .then(response => response.json())
            .then(data => {
              console.log('Blog data fetched from API:', data); 
              setBlog(data)
            })
            .catch(error => console.error('Error fetching blog:', error));
    }, [id]);

    return (
        <div>
            <HeaderAdmin title={"Detalles del Blog"} text={blog.title} />
            <div className="mt-8 space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Titulo
                    </label>
                    <p className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        {blog.title}
                    </p>
                </div>
                <div>
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                        Autor
                    </label>
                    <p className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        {blog.author}
                    </p>
                </div>
                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                        Fecha
                    </label>
                    <p className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    {formatDate(blog.date)}
                    </p>
                </div>
                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                    Contenido
                    </label>
                    <p className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        {blog.content}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DetailBlog;
