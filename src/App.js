import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Service from './pages/service';
import Service2 from './pages/service2';
import Service3 from './pages/service3';
import BlogPage from './pages/blogPage';
import About from './pages/about';
import Contact from './pages/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/service2' element={<Service2 />} />
        <Route path='/service3' element={<Service3 />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
