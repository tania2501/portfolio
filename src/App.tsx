import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { FotoBlock } from './components/FotoBlock/FotoBlock';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <FotoBlock/>
      <div className="app-wrapper-content">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>

  );
}

export default App;
