import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NaV from "./components/NaV";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <NaV />

      <Routes>
    
        <Route path="/" element={<Navigate to="/register" />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

    
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

      
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;