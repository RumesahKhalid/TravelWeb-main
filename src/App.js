import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Service from './pages/service';
import Hotel from './pages/hotels';
import Booking from './pages/booking';
import Reservation  from './pages/reservation';
import Service3 from './pages/service3';
import BlogPage from './pages/blogPage';
import About from './pages/about';
import Contact from './pages/contact';
import Activities from './pages/activities';
import Destination from './pages/destination';
import Signup from './pages/signup';
import Login from './pages/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/hotel' element={<Hotel/>} />
        <Route path='/booking' element={<Booking/>} />
        <Route path='/reservation' element={<Reservation/>}/>
        <Route path='/service3' element={<Service3 />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/activities' element={<Activities/>} />
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </div>
  );
}

export default App;
