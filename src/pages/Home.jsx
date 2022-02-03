import React from 'react';
import FeaturedRooms from '../components/FeaturedRooms';
import Hero from '../components/Hero'
import { SliderData } from "../data/SliderData";
import InfoSection from "../components/InfoSection";

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection />
      <FeaturedRooms />
    </>
  );
};

export default Home;
