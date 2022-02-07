import React from 'react';
import FeaturedRooms from '../components/FeaturedRooms';
import Hero from '../components/Hero'
import { SliderData } from "../data/SliderData";
import InfoSection from "../components/InfoSection";
import IntroHall from '../components/IntroHall';
import Hall from '../components/Hall';

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection />
      <FeaturedRooms />
      <IntroHall/>
      <Hall />
    </>
  );
};

export default Home;
