import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { FotoBlock } from "./components/FotoBlock/FotoBlock";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";


function App() {
 const [a, setA] = useState(false);
  const b = document.getElementById('preloader')
  setTimeout(()=>{
    setA(true)
    a && b?.remove()
  }, 3000)
  
  return (
    <>
      <div id='preloader' className={a ? 'preloaded' : ''}>
        <div className="loader_line"></div>
      </div>
      <div className="mobile">
        <Header />
        <div className="mobileContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <div className="app-wrapper">
        <Header />
        <FotoBlock />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
