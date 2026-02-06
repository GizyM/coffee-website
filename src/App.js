import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
