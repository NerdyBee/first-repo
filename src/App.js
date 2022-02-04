import React, {useState} from 'react';
import FeaturedRooms from './components/FeaturedRooms';
import Footer from './components/Footer';
import Hall from './components/Hall';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import IntroHall from './components/IntroHall';
import Navbar from './components/Navbar';
// import Rooms from './components/Rooms';
import SideBar from './components/SideBar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection />
      <FeaturedRooms />
      {/* <Rooms /> */}
      <IntroHall />
      <Hall />
      <Footer />
    </>
  );
}

export default App;
