import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Activities from './pages/Activities'
import About from './pages/About'
import Contact from './pages/Contact'
import ActivitiesDetail from './pages/ActivitiesDetail';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import Blog from './pages/Blog/Blog'
import Users from './pages/user/Users'
import Admin from './pages/Admin';
import CreateBlog from './pages/Blog/CreateBlog'
import EditBlog from './pages/Blog/EditBlog'
import DetailUser from './pages/user/DetailUser';
import Comment from './pages/comment/Comment';
import CreateComment from './pages/comment/CreateComment';
import EditComment from './pages/comment/EditComment';
import Login from './pages/Login';
import ProtectedRoutes from './utils/ProtectedRoutes';
import Register from './pages/Register';
import EditUser from './pages/user/EditUser';

const App = () => {
  return (
    <div className=' min-h-full'>
      <>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/activities' element={<Activities />} />
            <Route path='/activities/:id' element={<ActivitiesDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route element={<ProtectedRoutes role="admin" />}>
            <Route element={<AdminLayout />}>
              <Route path='/admin' element={<Admin />} />
              <Route path='/admin/users' element={<Users />} />
              <Route path='/admin/users/edit/:id' element={<EditUser />} />
              <Route path='/admin/users/detail/:id' element={<DetailUser />} />
              <Route path='/admin/blog' element={<Blog />} />
              <Route path='/admin/blog/create' element={<CreateBlog />} />
              <Route path='/admin/blog/edit/:id' element={<EditBlog />} />
              <Route path='/admin/comment' element={<Comment />} />
              <Route path='/admin/comment/create' element={<CreateComment />} />
              <Route path='/admin/comment/edit/:id' element={<EditComment />} />
              <Route path='/admin/comment/detail/:id' element={<EditComment />} />
            </Route>
          </Route>

        </Routes>
      </>
    </div>
  )
}

export default App