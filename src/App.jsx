import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Activities from './pages/Activities'
import About from './pages/About'
import Contact from './pages/Contact'
import ActivitiesDetail from './pages/ActivitiesDetail';
import Jobs from './pages/Jobs';
import JobsDetail from './pages/JobsDetail';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className=' min-h-full'>
      <>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/activities' element={<Activities />} />
            <Route path='/activities/:id' element={<ActivitiesDetail />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/jobs/:id' element={<JobsDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </>
    </div>
  )
}

export default App