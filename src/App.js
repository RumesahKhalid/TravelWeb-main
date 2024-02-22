import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Service from './pages/service';
import Hotel from './pages/hotels';
import Booking from './pages/booking';
import Service3 from './pages/service3';
import BlogPage from './pages/blogPage';
import About from './pages/about';
import Contact from './pages/contact';
import Activities from './pages/activities';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/hotel' element={<Hotel/>} />
        <Route path='/booking' element={<Booking/>} />
        <Route path='/service3' element={<Service3 />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/activities' element={<Activities/>} />
      </Routes>
    </div>
  );
}

export default App;
