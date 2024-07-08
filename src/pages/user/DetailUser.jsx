import { useParams } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useEffect, useState } from "react";

const DetailUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({ username: '', name: '', email: '' });

    useEffect(() => {
        // API para traer el usuario a través del id
        fetch(`http://localhost:3000/users/find/${id}`)
            .then(response => response.json())
            .then(data => {
              console.log('User data fetched from API:', data); 
              setUser(data)
            })
            .catch(error => console.error('Error fetching user:', error));
    }, [id]);

    return (
        <div>
            <HeaderAdmin title={"Detalles del Usuario"} text={user.username} />
            <div className="mt-8 space-y-6">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Nombre de Usuario
                    </label>
                    <p className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        {user.username}
                    </p>
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nombre
                    </label>
                    <p className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        {user.name}
                    </p>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <p className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        {user.email}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DetailUser;
