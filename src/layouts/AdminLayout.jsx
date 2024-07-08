import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen '>
        <Sidebar />
        <section className='lg:col-span-3 xl:col-span-5  p-8 bg-gray-200'>
            <Outlet/>
        </section>
    </div>
  );
};

export default AdminLayout;
