import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About/About.jsx";
import Season from "./pages/Season/Season.jsx";
import Partner from "./pages/Partner/Partner.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/season' element={<Season />} />
        <Route path='/partner' element={<Partner />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;