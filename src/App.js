import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/coffee/Header";
import Footer from "./components/coffee/FooterSection";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Products from "./pages/Products";
import Review from "./pages/Review";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/products" element={<Products />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
