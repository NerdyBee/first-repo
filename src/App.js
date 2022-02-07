import React, {useState} from 'react';
import { Route, Routes } from "react-router-dom";

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import GlobalStyle from './globalStyles';

import Home from './pages/Home';
import Room from './pages/Rooms';
import Abouts from './pages/About';
import Services from './pages/Services';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <>
        <GlobalStyle />
        <Navbar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/" element={<Room />} />
          <Route path="/about/" element={<Abouts />} />
          <Route path="/services/" element={<Services />} />
        </Routes>
        <Footer />
      </>
    </>
  );
}

export default App;
